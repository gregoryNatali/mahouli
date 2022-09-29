const baseUrl = 'http://localhost:8080/api'

export async function sendLogin(email: string, password: string) {
	const data: any = fetch(`${baseUrl}/user/login`, {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password
		})
	}).then(res => res.json())

	if (!data.success)
		return

	localStorage.setItem('token', data.jwt)
}