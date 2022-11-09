import { ActionsContainer, ContentContainer, InfoContainer, SynopsisContainer, SynopsisPageContainer } from "./styles";
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

  return (
    <SynopsisPageContainer>
      <h2>{anime.title}</h2>
      <InfoContainer>
        <ContentContainer>
          <img src={anime.images.jpg.large_image_url} alt="" />
          <ActionsContainer>
            <button>Favoritar</button>
            <button>Add Lista</button>
          </ActionsContainer>
          <div className="anime-info">
            <h4>Título: {anime.title}</h4>
            <h4>Episódios: {anime.episodes}</h4>
            <h4>Ano de lançamento: {anime.year}</h4>
          </div>
        </ContentContainer>
        <SynopsisContainer>
          <h1>Sinopse</h1>
          <p>{anime.synopsis}</p>
        </SynopsisContainer>
      </InfoContainer>
    </SynopsisPageContainer>
  )
}