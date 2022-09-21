import { AppDataSource } from "../data-source";
import { EntryList } from "../entity/EntryList";
import { User } from "../entity/User";
import { verifyJWT } from "../utils/jwt";
import { getRequestCookies } from "../utils/serverUtils";

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
		const jwt = getRequestCookies(req)

		if (typeof jwt !== 'string')
			return { success: false, message: 'missing cookies' }

		const content = await verifyJWT(jwt)
		const user = await AppDataSource.manager.findOneBy(User, { id: content.id })
	})

	fastify.post('/api/anime/addEntry', (req, resp) => {

	})

	fastify.post('/api/anime/editEntry', (req, resp) => {

	})

	fastify.post('/api/anime/deleteEntry', (req, resp) => {

	})

	// manga
	fastify.post('/api/manga/list', (req, resp) => {

	})

	fastify.post('/api/manga/addEntry', (req, resp) => {

	})

	fastify.post('/api/manga/editEntry', (req, resp) => {

	})

	fastify.post('/api/manga/deleteEntry', (req, resp) => {

	})
}