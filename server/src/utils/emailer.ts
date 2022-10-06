const nodemailer = require('nodemailer')
import { User } from '../entity/User'

export async function sendConfirmEmail(user: User) {
	const transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		secureConnection: false,
		port: 587,
		tls: {
			ciphers: 'SSLv3'
		},
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS
		}
	})

	const email = {
		from: `"Time mahouLi" <${process.env.EMAIL}>`,
		to: user.email,
		subject: 'mahouLi - Conta criada!',
		text: `Olá! Bem vindo(a) ao mahouLi!\n\nSeu código de confirmação é: ${user.confirm_code}`
	}

	transporter.sendMail(email, (err: any, info: any) => {
		if (err)
			return console.log(err);
	})
}