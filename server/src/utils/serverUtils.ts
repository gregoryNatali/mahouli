import { AppDataSource } from "../data-source";
import { FastifyRequest } from "fastify";
import { User } from "../entity/User";
import { verifyJWT } from "./jwt";

function getRequestCookies(req: FastifyRequest) {
	try {
		return req.headers.cookie
	}
	catch (err) {
		return { success: false, message: 'missing cookie' }
	}
}

export async function getUser(req: FastifyRequest): Promise<User | any> {
		const jwt = getRequestCookies(req)

		if (typeof jwt !== 'string')
			return { success: false, message: 'missing cookies' }

		const content = await verifyJWT(jwt)
		const user = await AppDataSource.manager.findOneBy(User, { id: content.id })

		return user
}