const baseUrl = 'http://localhost:8080/api'

const headers = new Headers()
headers.set('Authorization', localStorage.getItem('token')!)

export async function sendLogin(email: string, password: string) {
	const req = await fetch(`${baseUrl}/user/login`, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password
		})
	})

	const data = await req.json()

	if (!data.success)
		return

	localStorage.setItem('token', data.jwt)
}

export async function sendRegister(name: string, email: string, password: string) {
	const req = await fetch(`${baseUrl}/user/create`, {
		method: 'POST',
		body: JSON.stringify({
			name,
			email,
			password
		})
	})

	return await req.json()
}

export async function sendEmailConfirm(confirm_code: string) {
	const req = await fetch(`${baseUrl}/user/confirm-email`, {
		method: 'PUT',
		body: JSON.stringify({
			confirm_code
		})
	})

  const data = await req.json()

  if (!data.success)
    return data

	return await req.json()
}

export async function verifyLogin() {
	const req = await fetch(`${baseUrl}/user/verify`, {
		headers
	})
	
	return await req.json()
}

export async function getUser(id: string) {
	const req = await fetch(`${baseUrl}/user/get/${id}`, {
		headers
	})

	return await req.json()
}