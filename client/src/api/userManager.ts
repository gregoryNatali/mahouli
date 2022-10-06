import { NavigateFunction } from "react-router"

const baseUrl = 'http://localhost:8080/api'


export async function sendLogin(email: string, password: string, redirect: NavigateFunction) {
	const req = await fetch(`${baseUrl}/user/login`, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password
		})
	})

	const data = await req.json()
	localStorage.setItem('token', data.token)

	if (!data.success) {
		if (data.message === "email not confirmed") {
      redirect('/email-confirmation')
      return
    }
    
    return data
	}

	redirect('/')
}

export async function sendRegister(name: string, email: string, password: string, redirect: NavigateFunction) {
	const req = await fetch(`${baseUrl}/user/create`, {
		method: 'POST',
		body: JSON.stringify({
			name,
			email,
			password
		})
	})
	
	const data =  await req.json()

	if (!data.success)
		return data

	redirect('/signin')
}

export async function sendEmailConfirm(confirm_code: string, redirect: NavigateFunction) {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)

	const req = await fetch(`${baseUrl}/user/confirm-email`, {
		headers,
		method: 'POST',
		body: JSON.stringify({
			confirm_code
		})
	})

  const data = await req.json()

  if (!data.success)
    return data

	redirect('/')
}

export async function verifyLogin(redirect?: NavigateFunction) {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)

	const req = await fetch(`${baseUrl}/user/verify`, {
		headers
	})
	
	const data = await req.json()

	if (!data.success) {
		localStorage.removeItem('token')
		redirect!('/signin')
	}

	const url = document.location.pathname

		if (url === 'signin' ||
				url === 'signup' ||
				url === 'email-confirmation')
			redirect!('/')
}

export async function getUser(id: string) {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)

	const req = await fetch(`${baseUrl}/user/get/${id}`, {
		headers
	})

	return await req.json()
}

export async function getOwnAccount() {
	const headers = new Headers()
	headers.set('Authorization', localStorage.getItem('token')!)
	const req = await fetch(`${baseUrl}/api/user/getOwnAccount/`, {
		headers
	})

	return await req.json()
}