import { Anime } from "./Anime"

export interface EntryList {
	id?: number
	anime: KnownAnime
	start_date?: string
	finish_date?: string
	progress?: number
	score?: number
	is_favorite?: boolean
	is_anime?: boolean
}

export interface KnownAnime {
	id?: number
	mal_id: number
	img_url: string
	name: string
	total_episodes: number
	is_anime: boolean
}