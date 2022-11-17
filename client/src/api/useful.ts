export function getHeaders() {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)
	return headers
}

export function isUserLogged() {
	return Boolean(localStorage.getItem('token')!)
}