import { compare, hash } from 'bcryptjs'

export async function encryptText(text: string) {	
	return await hash(text, 10) 
}

export async function compareText(text: string, hash: string) {
	return await compare(text, hash)
}