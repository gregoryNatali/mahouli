import { getAnimeOrManga } from "../utils/animes";
import { KnownAnime } from "../entity/KnownAnime";
import { EntryList } from "../entity/EntryList";
import { getUser } from "../utils/serverUtils";
import { AppDataSource } from "../data-source";
import { FastifyInstance } from "fastify";
import { FastifyRequest } from "fastify";
import { User } from "../entity/User";

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
	fastify.get('/api/anime/list', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		return await AppDataSource.manager.findBy(EntryList, { user: user, is_anime: true })
	})

	fastify.post('/api/anime/addEntry', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user

		const body: any = req.body 
		const entry = await addToList(body, user, await getAnimeOrManga(body.name, body))
		return { success: Boolean(entry) }
	})

	fastify.post('/api/anime/editEntry', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const entry = await editListEntry(req.body, user)
		return { success: Boolean(entry) }
	})

	fastify.post('/api/anime/deleteEntry', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const entry = await removeFromList(req.body, user)
		return { success: Boolean(entry) }
	})

	// manga
	fastify.post('/api/manga/list', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user

		return await AppDataSource.manager.findBy(EntryList, { user: user, is_anime: false })
	})

	fastify.post('/api/manga/addEntry', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const body: any = req.body 
		const entry = await addToList(body, user, await getAnimeOrManga(body.name, body))
		return { success: Boolean(entry) }
	})

	fastify.post('/api/manga/editEntry', async (req: FastifyRequest) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const entry = await editListEntry(req.body, user)
		return { success: Boolean(entry) }
	})

	fastify.post('/api/manga/deleteEntry', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		const entry = await removeFromList(req.body, user)
		return { success: Boolean(entry) }
	})
}