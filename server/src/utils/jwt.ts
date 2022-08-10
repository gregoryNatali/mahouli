import { importPKCS8, importSPKI, jwtVerify, SignJWT } from "jose";
import * as dotenv from 'dotenv'

export async function createJWT(payload: any) {
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

async function testJWT() {
	dotenv.config()

	const jwt = createJWT({
		name: 'example',
		email: 'example@examp.le',
		password: 'example'
	})

	const payload = verifyJWT(await jwt)

	console.log(await jwt)
	console.log(await payload)
}

// testJWT()