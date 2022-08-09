import { exportPKCS8, exportSPKI, generateKeyPair } from "jose";

async function generateKey() {
	const { publicKey, privateKey } = await generateKeyPair('ES256')

	const privKey = await exportPKCS8(privateKey)
	const pubKey = await exportSPKI(publicKey)

	console.log('Private key:\n' + privKey)
	console.log('\nPublic key:\n' + pubKey)
}

generateKey()