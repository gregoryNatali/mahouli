import { AppDataSource } from "../data-source";
import { EntryList } from "../entity/EntryList";

function addToList(info: any) {
	let obj = new EntryList(info)
	return AppDataSource.manager.save(obj)
}

export async function listRoutes (fastify, options) {
	fastify.get('/api/anime', (req, resp) => {

	})
}