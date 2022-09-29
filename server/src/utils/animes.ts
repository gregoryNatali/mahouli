import { AppDataSource } from "../data-source";
import { KnownAnime } from "../entity/KnownAnime";

export async function getAnimeOrManga(name: string, info?: any) {
	const anime = await AppDataSource.manager.findOneBy(KnownAnime, { name: name })

	if (anime)
		return anime

	const newAnime = new KnownAnime(info)
	await AppDataSource.manager.save(newAnime)
}