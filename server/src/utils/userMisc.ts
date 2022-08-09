export function generateConfirmCode(length: number) {
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
	let res = ''

	for (let i = 0; i < length; i++)
		res += alphabet[Math.floor(Math.random() * alphabet.length)]
	
	return res
}