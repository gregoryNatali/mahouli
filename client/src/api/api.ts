import { SeasonAnime } from "../types/Anime"

const baseUrl = 'https://api.jikan.moe/v4'

export async function getSeasonAnimes(setSeasonAnime: any) {
  const data = await fetch(`${baseUrl}/seasons/now`)
                      .then((res) => res.json())
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