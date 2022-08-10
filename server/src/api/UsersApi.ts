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

		const jwt = await createJWT({
			id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			password: newUser.password
		})

		return { success: true, token: jwt, confirmed_email: newUser.confirmed_email }
	}) 

	fastify.get('/user/confirm-email', async (req, resp) => {
		// resp.redirect('/')

		// make redirectable link to confirm email (use query parameters)
	})

	fastify.put('/api/user/confirm-email', async (req, resp) => {
		let jwt: string

		try {
			jwt = req.headers.cookie
		}
		catch (err) {
			return { success: false, message: 'missing cookie' }	
		}

		const content = await verifyJWT(jwt)
		const user = await AppDataSource.manager.findOneBy(User, { email: content.email })

		try {
			if (req.body.confirm_code !== user.confirm_code)
				return { success: false, message: 'wrong code' }
		}
		catch (err) {
			return { success: false, message: 'missing confirm_code in body' }
		}

		user.confirmed_email = true
		user.confirm_code = ''

		AppDataSource.manager.save(user)

		return { success: true }
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