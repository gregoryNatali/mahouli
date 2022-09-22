import { AppDataSource } from "../data-source";
import { EntryList } from "../entity/EntryList";
import { getUser } from "../utils/serverUtils";
import { FastifyRequest } from "fastify";

async function addToList(info: any, is_anime: boolean) {
	let obj = new EntryList(info)
	obj.is_anime = is_anime
	return await AppDataSource.manager.save(obj)
}

async function removeFromList(info: any, is_anime: boolean) {
	let obj = new EntryList(info)
	obj.is_anime = is_anime
	return await AppDataSource.manager.delete(EntryList, obj)
}

async function editListEntry(info: any, is_anime: boolean) {
	let obj = await AppDataSource.manager.findOneBy(EntryList, { id: info.id })
	obj.img_url = info.img_url
	obj.name = info.name
	obj.progress = info.progress
	obj.score = info.score
	obj.start_date = info.start
	obj.total_episodes = info.total_episodes
	return await AppDataSource.manager.save(obj)
}

export async function listRoutes (fastify, options) {
	// anime
	fastify.get('/api/anime/list', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
		
		return await AppDataSource.manager.findBy(EntryList, { user: user })
	})

	fastify.post('/api/anime/addEntry', async (req: FastifyRequest, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user

		const entry = new EntryList(req.body)
		await AppDataSource.manager.save(entry)
		return { success: Boolean(entry)}
	})

	fastify.post('/api/anime/editEntry', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user

			//todo
	})

	fastify.post('/api/anime/deleteEntry', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
	})

	// manga
	fastify.post('/api/manga/list', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
	})

	fastify.post('/api/manga/addEntry', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
	})

	fastify.post('/api/manga/editEntry', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
	})

	fastify.post('/api/manga/deleteEntry', async (req, resp) => {
		const user = await getUser(req)
		if (!user.success)
			return user
	})
}