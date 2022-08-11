import { compareText, encryptText } from "../utils/encrypter";
import { getRequestCookies } from "../utils/serverUtils";
import { generateConfirmCode } from "../utils/userMisc";
import { createJWT, verifyJWT } from "../utils/jwt";
import { sendConfirmEmail } from "../utils/emailer";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function userRoutes (fastify, options) {
	fastify.post('/api/user/create', async (req, resp) => {
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

		const jwt = await createJWT(newUser)

		return { success: true, token: jwt, confirmed_email: newUser.confirmed_email }
	}) 

	fastify.get('/user/confirm-email', async (req, resp) => {
		// resp.redirect('/')

		// make redirectable link to confirm email (use query parameters)
	})

	fastify.put('/api/user/confirm-email', async (req, resp) => {
		let jwt: any =	getRequestCookies(req)

		if (typeof jwt !== 'string')
			return jwt

		const content = await verifyJWT(jwt)
		const user = await AppDataSource.manager.findOneBy(User, { id: content.id })

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
		const user = await AppDataSource.manager.findOneBy(User, { email: req.body.email })
		if (!user)
			return { success: false, message: 'user not found' }

		if (!compareText(req.body.password, user.password))
			return { success: false, message: 'wrong password' }

		const jwt = await createJWT(user)

		if (!user.confirmed_email) {
			sendConfirmEmail(user)
			return { success: false, jwt: jwt }
		}

		// maybe find something safer
		return { success: true, jwt: jwt }
	})

	fastify.get('/api/user/get/:id', async (req, resp) => {
		const user = await AppDataSource.manager.findOneBy(User, { id: req.params.id})
		return user
	})

	fastify.get('/api/user/verify', async (req, resp) => {
		const jwt = getRequestCookies(req)

		if (typeof jwt !== 'string')
			return { success: false, message: 'missing cookies' }

		const test = await verifyJWT(jwt)

		return { success: Boolean(test) }
	})

	fastify.get('/api/user/delete', async (req, resp) => {
		const jwt = getRequestCookies(req)

		if (typeof jwt !== 'string')
			return { success: false, message: 'missing cookies' }
			
		const content = await verifyJWT(jwt)
		const user = await AppDataSource.manager.findOneBy(User, { id: content.id })
		await AppDataSource.manager.remove(user)
		return { success: true}
	})

	fastify.put('/api/user/update', async (req, resp) => {
		let name: string
		try {
			name = req.body.name
		}
		catch (err) {
			return { success: false, message: 'missing cookies' }
		}
	})

	fastify.put('/api/user/update-pfp', async (req, resp) => {
		return
	})
} 