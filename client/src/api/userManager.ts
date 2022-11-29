import { NavigateFunction } from "react-router"
import { Account } from "../types/User"
import { getHeaders } from "./useful"

const baseUrl = 'http://localhost:8080/api'


export async function sendLogin(email: string, password: string, redirect: NavigateFunction, setWentWrong: any) {
	const req = await fetch(`${baseUrl}/user/login`, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password
		})
	})

	const data = await req.json()

	if (!data.success) {
		if (data.message === "email not confirmed") {
      redirect('/email-confirmation', {
				state: {
					token: data.token,
				}
			})
      return
    }

    if (data.message === 'wrong password' ||
        data.message === 'user not found')
      setWentWrong('Usuário ou senha incorretos')
		return
  }

	localStorage.setItem('token', data.token)
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

  const data = await req.json()

  if (!data.success)
    return data

  redirect('/signin')
}

export async function sendEmailConfirm(confirm_code: string, token: string, redirect: NavigateFunction) {
	const headers = new Headers()
	headers.set('Authorization', token)

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

	localStorage.setItem('token', token)
  redirect('/')
}

export async function verifyLogin(redirect?: NavigateFunction) {
  const req = await fetch(`${baseUrl}/user/verify`, {
    headers: getHeaders()
  })

  const data = await req.json()

  if (!data.success) {
    localStorage.removeItem('token')
    if (redirect)
      redirect('/signin')
  }

  const url = document.location.pathname

  if ((url === 'signin' ||
    url === 'signup' ||
    url === 'email-confirmation') && redirect)
    redirect('/')
}

export async function getUser(id: string) {
  const req = await fetch(`${baseUrl}/user/get/${id}`, {
    headers: getHeaders()
  })

  return await req.json() as Account
}

export async function getOwnAccount() {
  const req = await fetch(`${baseUrl}/user/getOwnAccount`, {
    headers: getHeaders()
  })

	return await req.json() as Account
}

export async function changePFP(image: any) {
	const headers = getHeaders()

	const body = new FormData()
	body.append('image', image)

	const req = await fetch(`${baseUrl}/user/update-pfp`, {
		method: 'PUT',
		headers: headers,
		body
	})

	const data = await req.json()
	return data
}