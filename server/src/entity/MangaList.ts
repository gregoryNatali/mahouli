import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class UserMangaList {

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

}
