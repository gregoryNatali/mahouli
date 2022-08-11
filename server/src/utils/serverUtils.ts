import { FastifyRequest } from "fastify";

export function getRequestCookies(req: FastifyRequest) {
	try {
		return req.headers.cookie
	}
	catch (err) {
		return { success: false, message: 'missing cookie' }
	}
}