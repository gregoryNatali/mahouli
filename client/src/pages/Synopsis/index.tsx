import { SynopsisPageContainer } from "./styles";
import { Anime } from "../../types/Anime";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAnimeById, getMangaById } from "../../api/jikanApi";

export function SynopsisPage() {
	const [anime, setAnime] = useState<Anime>()
	const { id } = useParams()

	useEffect(() => {
		const searchType = location.pathname.split('/')

		if (searchType[1] === 'anime') {
			getAnimeById(id!, setAnime)
			return
		}

		getMangaById(id!, setAnime)
	}, [location.pathname])

	if (!anime)
		return <div>Loading...</div>

		console.log(anime)
  return(
    <SynopsisPageContainer>
			<div className="info">
				<img src={ anime.images.jpg.large_image_url } alt="" />
				<h2>{ anime.title }</h2>
				<h4>{ anime.year }</h4>
			</div>	
    </SynopsisPageContainer>
  )
}