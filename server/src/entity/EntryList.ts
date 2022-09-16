import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class EntryList {

    @PrimaryGeneratedColumn()
    id: number

    @Column("integer")
    mal_id: number

		@ManyToOne(() => User, (user) => user.id)
		user: User

		@Column("varchar")
		img_url: string

		@Column("varchar")
		name: string

    @Column("date")
    start_date: string

    @Column("date")
    finish_date: string

		@Column("integer")
		progress: number

		@Column("integer")
		total_episodes: number

		@Column("integer")
		score: number

		@Column("boolean")
		is_anime: number

		constructor(info?: any) {
			this.id = info.id
			this.mal_id = info.mal_id
			this.user = info.user
			this.img_url = info.img_url
			this.name = info.name
			this.start_date = info.start_date
			this.finish_date = info.finish_date
			this.progress = info.progress
			this.total_episodes = info.total_episodes
			this.score = info.score
		}
}
