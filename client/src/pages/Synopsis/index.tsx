import { ActionsContainer, ContentContainer, InfoContainer, SynopsisContainer, SynopsisPageContainer } from "./styles";
import { AddToListButton } from "../../components/AddToListButton";
import { getEntryById } from "../../api/jikanApi";
import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";
import { useParams } from "react-router";

export function SynopsisPage() {
	const [entry, setEntry] = useState<Anime | Manga | any>()
  const searchType = location.pathname.split('/')[1] as 'anime' | 'manga'
  const { id } = useParams()

  useEffect(() => {
		getEntryById(
			id!,
			searchType,
			setEntry
		)
  }, [location.pathname])

	if (!entry)
		return <div>Loading...</div>

	return (
		<SynopsisPageContainer>
			<h2>{entry.title}</h2>
			<InfoContainer>
				<ContentContainer>
					<img src={entry.images.jpg.large_image_url} alt="cover" />
					<ActionsContainer>
						<AddToListButton entry={entry} isAnime={searchType} seeButton />
					</ActionsContainer>
					<div className="info">
						<h4>Título: {entry.title}</h4>
						<h4>Ano de lançamento: {entry.year}</h4>
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