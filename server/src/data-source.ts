import { DataSource } from "typeorm"
import { User } from "./entity/User"
import "reflect-metadata"

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "root",
	database: "mahouli",
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
})
