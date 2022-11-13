import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { KnownAnime } from "./KnownAnime"
import { User } from "./User"

@Entity()
export class EntryList {

	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => User, (user) => user.entries)
	user: User

	@ManyToOne(() => KnownAnime, (anime) => anime.entries)
	anime: KnownAnime

	@CreateDateColumn()
	start_date: Date

	@Column("date", { nullable: true })
	finish_date: string

	@Column("integer", { default: 0})
	progress: number

	@Column("integer", { nullable: true, default: null })
	score: number

	@Column("boolean", { default: false })
	is_favorite: boolean

	@Column("boolean", { default: true })
	is_anime: boolean

	constructor(info?: any, user?: User, anime?: KnownAnime) {
		if (!user || !anime)
			return

		this.user = user
		this.anime = anime
	}

}
