import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import fastify from "fastify"

AppDataSource.initialize().then(async () => {

  // repository = table

  // instantiate a entity
  // const user = new User()
  // set user values individually, or create constructor idk
  // insert:
  //  await AppDataSource.manager.save(instantiated entity)
  // search:
  //  AppDataSource.manager.find({ id: 1 })
  //  AppDataSource.manager.find(instantiated entity)
  //    find, findOneBy, findBy, findAndCount

  const server = fastify()

  server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Servidor rodando em ${address}`)
  })

}).catch(error => console.log(error))
