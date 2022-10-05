import { AppDataSource } from "../data-source";
import { FastifyRequest } from "fastify";
import { User } from "../entity/User";
import { verifyJWT } from "./jwt";

function getRequestCookies(req: FastifyRequest) {
	try {
		return { success: true, message: req.headers.authorization }
	}
	catch (err) {
		return { success: false, message: 'missing authorization' }
	}
}

export async function getUser(req: FastifyRequest): Promise<User | any> {
		const jwt = getRequestCookies(req)

		if (!jwt.success)
			return { success: false, message: 'missing authorization' }

		const content = await verifyJWT(jwt.message)
		const user = await AppDataSource.manager.findOneBy(User, { id: content.id })


		return { success: true, user } 
}