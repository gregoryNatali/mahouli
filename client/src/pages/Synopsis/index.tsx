import { ActionsContainer, ContentContainer, InfoContainer, SynopsisContainer, SynopsisPageContainer } from "./styles";
import { getEntryById } from "../../api/jikanApi";
import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";
import { useNavigate, useParams } from "react-router";
import { addToList, getCacheList, setLastList } from "../../api/listManager";

export function SynopsisPage() {
	const [entry, setEntry] = useState<Anime | Manga | any>()
  const searchType = location.pathname.split('/')[1] as 'anime' | 'manga'
	const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
		getEntryById(
			id!,
			searchType,
			setEntry
		)
  }, [location.pathname])

	const handleSeeInList = () => {
		setLastList(searchType)
		redirect(`/list#mal_id${entry.mal_id}`)
	}

	if (!entry)
		return <div>Loading...</div>
	
	const cacheList = getCacheList(searchType)

	const already = cacheList.map((val: Anime | Manga) => {
		return entry.mal_id === val.mal_id
	})

	return (
		<SynopsisPageContainer>
			<h2>{entry.title}</h2>
			<InfoContainer>
				<ContentContainer>
					<img src={entry.images.jpg.large_image_url} alt="cover" />
					<ActionsContainer>
						{!already.length ?
							<button onClick={() => addToList(entry, searchType)}>Adicionar à Lista</button>
						:
							<button onClick={() => handleSeeInList()}>Ver na lista</button>
						}
					</ActionsContainer>
					<div className="info">
						<h4>Título: {entry.title}</h4>
						{searchType[1] === 'anime' ?
							<>
							<h4>Ano de lançamento: {entry.year}</h4>
							<h4>Episódios: {entry.episodes}</h4>
							</>
						:
							<>
							{entry.chapters ? <h4>Capítulos: {entry.chapters}</h4> : <></>}
							{entry.volumes ? <h4>Volumes: {entry.volumes}</h4> : <></>}
							</>
						}
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