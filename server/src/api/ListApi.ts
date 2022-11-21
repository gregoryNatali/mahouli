import { getAnimeOrManga } from "../utils/animes"
import { KnownAnime } from "../entity/KnownAnime"
import { EntryList } from "../entity/EntryList"
import { getUser } from "../utils/serverUtils"
import { AppDataSource } from "../data-source"
import { FastifyInstance } from "fastify"
import { FastifyRequest } from "fastify"
import { User } from "../entity/User"

async function addToList(info: any, user: User, anime: KnownAnime) {
	let obj = new EntryList()
	obj.is_anime = anime.is_anime
	obj.anime = anime
	obj.user = user
	const savedObj = await AppDataSource.manager.save(obj)
	return savedObj
}

async function removeFromList(id: number, user: User) {
	let obj = await AppDataSource.manager.findOne(EntryList, {
		relations: {user: true, anime: true},
		where: {
			anime: { mal_id: id },
			user: { id: user.id }
		}
	})

	return await AppDataSource.manager.remove(obj)
}

async function editListEntry(info: any, user: User) {
	let obj = await AppDataSource.manager.findOneBy(EntryList, { id: info.id })

	if (obj.user !== user)
		return false
	
	obj.progress = info.progress
	obj.score = info.score
	obj.start_date = info.start
	return await AppDataSource.manager.save(obj)
}


export async function listRoutes (fastify: FastifyInstance) {
	// anime
	fastify.get('/api/:isanime/list', async (req: FastifyRequest) => {
		const { success, user } = await getUser(req)
		if (!success)
			return user
		
		const { isanime } = req.params as { isanime: string }
		return await AppDataSource.manager.find(EntryList, {
			relations: { anime: true },
			where: {
				user: user,
				is_anime: isanime === 'anime',
			}
		})
	})

	fastify.post('/api/:isanime/list', async (req: FastifyRequest) => {
		const { success, user } = await getUser(req)
		if (!success)
			return 'damn, no authentication huh'

		const body: any = JSON.parse(req.body as any)
		const entry = await addToList(body, user, await getAnimeOrManga(body.anime.mal_id, body.anime))
		return { success: Boolean(entry) }
	})

	fastify.put('/api/:isanime/list', async (req: FastifyRequest) => {
		const { success, user } = await getUser(req)
		if (!success)
			return user
		
		const body: any = JSON.parse(req.body as any)
		const entry = await editListEntry(body, user)
		return { success: Boolean(entry) }
	})

	fastify.delete('/api/:isanime/list/:mal_id', async (req: FastifyRequest) => {
		const { success, user } = await getUser(req)
		if (!success)
			return user

		console.log('autenticado')
		const { mal_id } = req.params as { mal_id: string }
		console.log('pegou params')
		const entry = await removeFromList(parseInt(mal_id), user)
		return { success: Boolean(entry) }
	})
}