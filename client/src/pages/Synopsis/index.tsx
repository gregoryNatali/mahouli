import { ActionsContainer, ContentContainer, InfoContainer, SynopsisContainer, SynopsisPageContainer } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAnimeById, getMangaById } from "../../api/jikanApi";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";

export function SynopsisPage() {
  const [anime, setAnime] = useState<Anime>()
  const [manga, setManga] = useState<Manga>()
  const { id } = useParams()
  const searchType = location.pathname.split('/')

  useEffect(() => {
    if (searchType[1] === 'anime') {
      getAnimeById(id!, setAnime)
      return
    }

    if (searchType[1] === 'manga') {
      getMangaById(id!, setManga)
      return
    }
  }, [location.pathname])

  if (searchType[1] === 'anime') {
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
            <div className="info">
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

  if (searchType[1] === 'manga') {
    if (!manga)
      return <div>Loading...</div>

    return (
      <SynopsisPageContainer>
        <h2>{manga.title}</h2>
        <InfoContainer>
          <ContentContainer>
            <img src={manga.images.jpg.large_image_url} alt="" />
            <ActionsContainer>
              <button>Favoritar</button>
              <button>Add Lista</button>
            </ActionsContainer>
            <div className="info">
              <h4>Título: {manga.title}</h4>
              <h4>Capítulos: {manga.chapters}</h4>
              <h4>Volumes: {manga.volumes}</h4>
            </div>
          </ContentContainer>
          <SynopsisContainer>
            <h1>Sinopse</h1>
            <p>{manga.synopsis}</p>
          </SynopsisContainer>
        </InfoContainer>
      </SynopsisPageContainer>
    )
  }
}