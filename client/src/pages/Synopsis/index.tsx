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

  return(
    <SynopsisPageContainer>
			<div className="info">
				<div className="image">
					<img src={ anime.images.jpg.large_image_url } alt="" />
				</div>
				<div className="actions">
				</div>
				<div className="anime-info">
					<h2>{ anime.title }</h2>
					<h4>{ anime.year }</h4>
					<p>{ anime.synopsis }</p>
				</div>
			</div>	
    </SynopsisPageContainer>
  )
}