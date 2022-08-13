import { AppDataSource } from "./data-source"
import { userRoutes } from "./api/UsersApi"
import * as dotenv from 'dotenv'
import fastify from "fastify"

AppDataSource.initialize().then(async () => {

	// repository/entity = table

	// instantiate a entity
	// const user = new User()
	// set user values individually, or create constructor idk
	// insert:
	//  await AppDataSource.manager.save(instantiated entity)
	// search:
	//  AppDataSource.manager.find({ id: 1 })
	//  AppDataSource.manager.find(instantiated entity)
	//    find, findOneBy, findBy, findAndCount

	dotenv.config()	

	const server = fastify()

	// support to receive images (used for pfp)
	server.register(require('@fastify/multipart'), {
		limits: {
			fileSize: 8000000, // 8mb
			files: 1
		}
	})

	server.register(userRoutes)

	server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		console.log(`Servidor rodando em ${address}`)
	})

}).catch(error => console.log(error))
