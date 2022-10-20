import { SeasonAnime } from "../types/SeasonAnime"

const baseUrl = 'https://api.jikan.moe/v4'

// general
// AnimeChanAPI: "https://animechan.vercel.app/api/random"

// home
// getAnimeNews ("/anime/{id}/news")

// animes page
// getSeasonNow ("/seasons/now")
// page: integer
export async function getSeasonAnimes(setSeasonAnime: any) {
  const req = await fetch(`${baseUrl}/seasons/now`)
	const data = await req.json()

  const formattedData: Array<SeasonAnime> = []

  data.data.forEach((e: any) => {
    formattedData.push({
      name: e.title,
      image: e.images.jpg.image_url,
      malId: e.mal_id
    })
  })

  setSeasonAnime(formattedData)
}

// synopsis page
// getAnimeById ("/anime/{id}")
// getMangaById ("/manga/{id}")

// search page
// getAnimeSearch ("/anime")
// getMangaSearch ("/manga")
// q: string (query)
// limit: integer
// page: integer
// sfw: boolean
// order_by: string ("mal_id", "title", "type",
//									 "rating", "start_date", "end_date",
//									 "episodes", "score", "scored_by",
//									 "rank", "popularity", "members"
//									 "favorites")
// sort: string ("desc", "asc")
// letter: string (basically query but with 1 letter)
// producers: string
// start_date: string ("2022", "2022-12", "2022-12-30")
// end_date: string ("2022", "2022-12", "2022-12-30")