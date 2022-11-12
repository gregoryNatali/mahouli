import { getAnimeOrManga } from "../utils/animes"
import { KnownAnime } from "../entity/KnownAnime"
import { EntryList } from "../entity/EntryList"
import { getUser } from "../utils/serverUtils"
import { AppDataSource } from "../data-source"
import { FastifyInstance } from "fastify"
import { FastifyRequest } from "fastify"
import { User } from "../entity/User"

async function addToList(info: any, user: User, anime: KnownAnime) {
	let obj = new EntryList(info, user, anime)
	return await AppDataSource.manager.save(obj)
}

async function removeFromList(info: any, user: User) {
	let obj = await AppDataSource.manager.findOneBy(EntryList, { id: info.id })

	if (obj.user !== user)
		return false

	return await AppDataSource.manager.delete(EntryList, obj)
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
	fastify.options('/api/:isanime/list', async (req, resp) => {})
	fastify.get('/api/:isanime/list', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const { isanime } = req.params as { isanime: string }
		return await AppDataSource.manager.findBy(EntryList, {
			user: user,
			is_anime: isanime === 'anime'
		})
	})

	fastify.post('/api/:isanime/list', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user

		const body: any = req.body 
		const entry = await addToList(body, user, await getAnimeOrManga(body.name, body))
		return { success: Boolean(entry) }
	})

	fastify.put('/api/:isanime/list', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const entry = await editListEntry(req.body, user)
		return { success: Boolean(entry) }
	})

	fastify.post('/api/:isanime/deleteEntry', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const entry = await removeFromList(req.body, user)
		return { success: Boolean(entry) }
	})
}