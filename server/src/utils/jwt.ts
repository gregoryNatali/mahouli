import { importPKCS8, importSPKI, jwtVerify, SignJWT } from "jose";
import { User } from "../entity/User";

export async function createJWT(user: User) {
	const payload = {
		id: user.id,
		email: user.email,
		password: user.password
	}

	const jwt = await new SignJWT(payload)
		.setProtectedHeader({ alg: 'ES256' })
		.setExpirationTime('14d')
		.sign(await importPKCS8(process.env.JWT_PRIVATE_KEY, 'ES256'))
	
	return jwt
}

export async function verifyJWT(jwt: string) {
	const pubKey = await importSPKI(process.env.JWT_PUBLIC_KEY, 'ES256')
	let data: any

	try {
		const { payload, protectedHeader } = await jwtVerify(jwt, pubKey)
		data = payload
	}
	catch (err) {
		data = null
	}

	return data
}