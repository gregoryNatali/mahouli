import { fastifyStatic } from "@fastify/static"
import { AppDataSource } from "./data-source"
import { userRoutes } from "./api/UsersApi"
import { listRoutes } from "./api/ListApi"
import * as dotenv from 'dotenv'
import cors from '@fastify/cors'
import fastify from "fastify"
import path = require('path')

AppDataSource.initialize().then(async () => {

	dotenv.config()	

	const server = fastify()

	// support to receive images (used for pfp)
	server.register(require('@fastify/multipart'), {
		limits: {
			fileSize: 8000000, // 8mb
			files: 1
		}
	})

	// console.log(path.basename(path.dirname(__dirname)))
	// console.log(path.resolve(__dirname, '../images/users'));
	// console.log(pathToFileURL(path.resolve(__dirname, '../images/users').toString()).toString())
	
	server.register(userRoutes)
	server.register(listRoutes)
	server.register(fastifyStatic, {
		root: path.resolve(__dirname, '../images/users'),
		prefix: '/images/users'
	})
	server.register(cors, {
		origin: '*'
	})
	// await server.register(fileRoutes, {
	// 	routesDir: '../images/users',
	// 	// prefix: '/images/users'
	// })

	server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		console.log(`Servidor rodando em ${address}`)
	})

}).catch(error => console.log(error))
