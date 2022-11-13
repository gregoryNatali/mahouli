import { AppDataSource } from "../data-source";
import { KnownAnime } from "../entity/KnownAnime";

export async function getAnimeOrManga(mal_id: string, info?: any) {
	const anime = await AppDataSource.manager.findOneBy(KnownAnime, { mal_id: parseInt(mal_id) })

	if (anime)
		return anime

	const newAnime = new KnownAnime(info)
	return await AppDataSource.manager.save(newAnime)
}