import { importPKCS8, importSPKI, jwtVerify, SignJWT } from "jose";

export async function createJWT(payload: any) {
	const jwt = await new SignJWT(payload)
		.setProtectedHeader({ alg: 'ES256' })
		.setExpirationTime('14d')
		.sign(await importPKCS8(process.env.JWT_PRIVATE_KEY, 'ES256'))
	
	return jwt
}

export async function verifyJWT(jwt: string) {
	const pubKey = await importSPKI(process.env.JWT_PUBLIC_KEY, 'ES256')
	const { payload, protectedHeader } = await jwtVerify(jwt, pubKey)

	return payload
}