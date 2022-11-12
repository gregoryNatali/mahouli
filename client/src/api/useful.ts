export function getHeaders() {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)
	return headers
}