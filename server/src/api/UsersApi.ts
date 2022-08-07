import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function userRoutes (fastify, options) {
	fastify.put('/api/user/confirm-email', async (req, resp) => {
		return
	})

	fastify.post('/api/user/create', async (req, resp) => {
		return
	}) 

	fastify.post('/api/user/login', async (req, resp) => {
		return
	})

	fastify.get('/api/user/get/:id', async (req, resp) => {
		return
	})

	fastify.get('/api/user/verify', async (req, resp) => {
		return
	})

	fastify.get('/api/user/delete', async (req, resp) => {
		return
	})

	fastify.put('/api/user/update', async (req, resp) => {
		return
	})

	fastify.put('/api/user/update-pfp', async (req, resp) => {
		return
	})
} 