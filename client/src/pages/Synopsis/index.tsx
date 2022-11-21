import { ActionsContainer, ContentContainer, InfoContainer, SynopsisContainer, SynopsisPageContainer, UnavailableContainer } from "./styles";
import { AddToListButton } from "../../components/AddToListButton";
import { getEntryById } from "../../api/jikanApi";
import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";
import { Author, Manga } from "../../types/Manga";
import { useParams } from "react-router";

export function SynopsisPage() {
  const [entry, setEntry] = useState<Anime | Manga | any>()
  const [is404, set404] = useState<string>()
  const searchType = location.pathname.split('/')[1] as 'anime' | 'manga'
  const { id } = useParams()

  useEffect(() => {
    getEntryById(
      id!,
      searchType,
      setEntry
    )
  }, [location.pathname])


  const getGif = async () => {
    const req = await fetch(`https://nekos.best/api/v2/blush`)
    const data = await req.json()
    return data.results[0].url
  }

  if (!entry)
    return <div>Loading...</div>

  if (entry === 404) {
    if (!is404)
      getGif().then((data) => set404(data))
    return <UnavailableContainer>
      <div>
        <h1>404!</h1>
        <p>
          Pode ser que o servidor esteja fora,
          <br />
          como também pode ser um anime ou mangá safadinho...
        </p>
        <img src={is404} alt="blush anime gif" />
      </div>
    </UnavailableContainer>
  }

  return (
    <SynopsisPageContainer>
      <InfoContainer>
        <ContentContainer>
          <div className="card">
            <h2>{entry.title}</h2>
            <img src={entry.images.jpg.large_image_url} alt="cover" />
          </div>
          <ActionsContainer>
            <AddToListButton entry={entry} isAnime={searchType} seeButton />
          </ActionsContainer>
          <div className="info">
            <h4>Título: {entry.title}</h4>
            {entry.year &&
              <h4>Ano de lançamento: {entry.year}</h4>
            }
            {searchType[1] === 'anime' ?
              <>
                <h4>Episódios: {entry.episodes}</h4>
              </>
              :
              <>
                {entry.chapters ? <h4>Capítulos: {entry.chapters}</h4> : <></>}
                {entry.volumes ? <h4>Volumes: {entry.volumes}</h4> : <></>}
              </>
            }
            <h4>
              Autores:
              {entry.authors.map((author: Author) => (
                <p>{author.name}</p>
              ))}

            </h4>
          </div>
        </ContentContainer>
        <SynopsisContainer>
          <h1>Sinopse</h1>
          <p>{entry.synopsis}</p>
        </SynopsisContainer>
      </InfoContainer>
    </SynopsisPageContainer>
  )
}