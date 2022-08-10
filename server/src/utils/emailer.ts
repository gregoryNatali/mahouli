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
		from: `"mahouLi Team " <${process.env.EMAIL}>`,
		to: user.email,
		subject: 'mahouLi Account Creation',
		text: `Hey there! Welcome to mahouLi!\n\nYour confirmation code is ${user.confirm_code}`
	}

	transporter.sendMail(email, (err, info) => {
		if (err)
			return console.log(err);
	})
}