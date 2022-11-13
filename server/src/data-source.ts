import { DataSource } from "typeorm"
import { User } from "./entity/User"
import "reflect-metadata"
import { EntryList } from "./entity/EntryList"
import { KnownAnime } from "./entity/KnownAnime"

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "root",
	database: "mahouli",
	synchronize: true,
	logging: false,
	entities: [
		User,
		EntryList,
		KnownAnime
	],
	migrations: [],
	subscribers: [],
})
