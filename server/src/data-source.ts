import { DataSource } from "typeorm"
import { User } from "./entity/User"
import "reflect-metadata"

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3307,
	username: "root",
	password: "",
	database: "mahouli",
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
})
