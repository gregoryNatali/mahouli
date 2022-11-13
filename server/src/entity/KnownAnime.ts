import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntryList } from "./EntryList";

@Entity()
export class KnownAnime {

	@PrimaryGeneratedColumn()
	id: number

	@Column("integer")
	mal_id: number

	@Column("varchar")
	img_url: string

	@Column("varchar")
	name: string

	@Column("integer")
	total_episodes: number

	@Column("boolean")
	is_anime: boolean

	@OneToMany(() => EntryList, (entry) => entry.anime)
	entries: EntryList[]

	constructor(info?: any) {
		if (!info)
			return 

		this.mal_id = info.mal_id
		this.img_url = info.img_url
		this.name = info.name
		this.total_episodes = info.total_episodes
		this.is_anime = info.is_anime
	}
}