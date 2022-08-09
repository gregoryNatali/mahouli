import { generateConfirmCode } from "../utils/userMisc";
import { createJWT, verifyJWT } from "../utils/jwt";
import { encryptText } from "../utils/encrypter";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function userRoutes (fastify, options) {
	fastify.post('/api/user/create', async (req, resp) => {
		const userTable = AppDataSource.getRepository(User)
		const info = req.body

		const newUser = new User()
		try {
			if (!info.password || !info.name || !info.email)
				throw 'error'

			newUser.name = info.name
			newUser.email = info.email
			newUser.password = await encryptText(info.password)
			newUser.join_date = new Date().toISOString().substring(0, 10)
			newUser.confirm_code = generateConfirmCode(8)
		}
		catch (err) {
			return { success: false, message: 'missing information in request body'}
		}
		
		const existing = await AppDataSource.manager.findOneBy(User, { email: info.email })
		if (existing)
			return { success: false, message: 'email already exists' }

		await AppDataSource.manager.save(newUser)

		// make email confirmation

		return { success: true }
	}) 

	fastify.put('/api/user/confirm-email', async (req, resp) => {
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