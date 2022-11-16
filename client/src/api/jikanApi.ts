import { formattedData } from "../types/SeasonAnime"

const baseUrl = 'https://api.jikan.moe/v4'

// gif
// https://nekos.best/api/v2
//	/endpoints
//	/poke
//	/wave
//	/think

// home
// getAnimeNews ("/anime/{id}/news")

// animes page
// getSeasonNow ("/seasons/now")
// page: integer
export async function getSeasonAnimes(setSeasonAnime: any) {
  const req = await fetch(`${baseUrl}/seasons/now`)
	const data = await req.json()

  const formattedData: Array<formattedData> = []

  data.data.forEach((e: any) => {
    formattedData.push({
      name: e.title,
      image: e.images.jpg.image_url,
      malId: e.mal_id
    })
  })

  setSeasonAnime(formattedData)
}

export async function getRandomMangas(setRandomMangas: any) {
  const req = await fetch(`${baseUrl}/top/manga`)
  const data = await req.json()

  const formattedData: Array<formattedData> = []
    
    data.data.forEach((e: any) => {
      formattedData.push({
        name: e.title,
        image: e.images.jpg.image_url,
        malId: e.mal_id
      })
    })
    
  setRandomMangas(formattedData)
}

// synopsis page
// getAnimeById ("/anime/{id}")
// getMangaById ("/manga/{id}")
export async function getEntryById(id: string, type: 'anime' | 'manga', setState: any) {
	const req = await fetch(`${baseUrl}/${type}/${id}`)
	const data = await req.json()

	setState(data.data)
}

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
export async function getEntrySearch(
	query: string, limit: number, page: number, sfw: boolean = true,
	resultState: any, 
	) {
		const reqAnime = await fetch(`${baseUrl}/anime?q=${query}&limit=${limit}&page=${page}&sfw=${sfw}`)
		const reqManga = await fetch(`${baseUrl}/manga?q=${query}&limit=${limit}&page=${page}&sfw=${sfw}`)

		const dataAnime = await reqAnime.json()
		const dataManga = await reqManga.json()

		resultState({
			query: query,
			anime: dataAnime.data,
			manga: dataManga.data
		})
		return {
			pagAnime: dataAnime.pagination.has_next_page,
			pagManga: dataManga.pagination.has_next_page
		}
}