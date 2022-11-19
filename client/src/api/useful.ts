export function getHeaders() {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)
	return headers
}

export function isUserLogged() {
	const token = localStorage.getItem('token')!
	if (!token || token === 'undefined') {
		localStorage.removeItem('token')
		return false
	}

	return true
}