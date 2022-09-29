import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm"
import { KnownAnime } from "./KnownAnime"
import { User } from "./User"

@Entity()
export class EntryList {

    @PrimaryGeneratedColumn()
    id: number

		@ManyToOne(() => User, (user) => user.id)
		user: User

		@ManyToMany(() => KnownAnime, (anime) => anime.id)
		anime: KnownAnime

    @Column("date")
    start_date: string

    @Column("date")
    finish_date: string

		@Column("integer")
		progress: number

		@Column("integer")
		score: number

		@Column("boolean")
		is_favorite: boolean

		@Column("boolean")
		is_anime: boolean

		constructor(info?: any, user?: User, anime?: KnownAnime) {
			this.id = info.id
			this.user = user
			this.anime = anime
			this.start_date = info.start_date
			this.finish_date = info.finish_date
			this.progress = info.progress
			this.score = info.score
			this.is_favorite = info.is_favorite
			this.is_anime = info.is_anime
		}
}
