import { SearchPageControls, SearchPageResult, SearchPageResultsContent, SearchPageSideContent, SearchPageStyle } from "./styles";
import { ChevronLeft, ChevronRight, Search } from "react-feather";
import { SyntheticEvent, useEffect, useState } from "react";
import { getEntrySearch } from "../../api/jikanApi";
import { useLocation } from "react-router";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";
import { addToList } from "../../api/listManager";

// Todo:
//	set limit
//	page buttons
//	add to list button
const limit = 30

export function SearchPage() {
	const [results, setResults] = useState<{ anime: Anime[], manga: Manga[] }>()
	const [mode, setMode] = useState<'manga' | 'anime'>('anime')
	const [page, setPage] = useState<number>(0)
	const state = useLocation().state as string

	useEffect(() => {
		const query = document.querySelector<HTMLInputElement>('#PageSearchBar')?.value
		if (state && state !== query)
			search(state)
	}, [page])

	const search = (query: string) => {
		getEntrySearch(query, limit, page, true, setResults)
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		const query = document.querySelector<HTMLInputElement>('#PageSearchBar')?.value
		if (query)
			search(query)
	}

	return (
		<SearchPageStyle>
			<form onSubmit={handleSubmit}>
				<input type="text" defaultValue={state ? state : ''} id="PageSearchBar" />
				<button type="submit"><Search /></button>
			</form>
			<SearchPageResultsContent>
					<SearchPageSideContent>
						<table>
							<thead>
								<tr>
									<th></th>
									<th>Título</th>
									<th>Ano de Lançamento</th>
									<th>Status</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{results?.anime.map((val: Anime, idx) => <tr key={idx+'anime'}>
									<td className="image"><img src={val.images.jpg.small_image_url} /></td>
									<td>{val.title}</td>
									<td className="ano">{val.year}</td>
									<td className="status">{val.airing ? 'Em produção' : 'Terminado'}</td>
									<td><button onClick={() => addToList(val, mode)}>Adicionar à lista</button></td>
								</tr>)}
							</tbody>
						</table>
					</SearchPageSideContent>
				{/* {mode === 'anime' ?
					<SearchPageSideContent>
						<div id="legend">
							<div>Título</div>
							<div>Ano de Lançamento</div>
						</div>
						{results?.anime.map((val: Anime, idx) => <SearchPageResult key={idx+'anime'}>
							<div className="image-wrapper">
								<img src={val.images.jpg.small_image_url} alt="" />
							</div>
							<div>{val.title}</div>
							<div>{val.airing ? 'Em produção...' : 'Terminado'}</div>
							<div>{val.year}</div>
						</SearchPageResult>)}
					</SearchPageSideContent>
				:
					<SearchPageSideContent>
						{results?.manga.map((val: Manga, idx) => <SearchPageResult key={idx+'manga'}>
							<img src={val.images.jpg.small_image_url} alt="" />
						</SearchPageResult>)}
					</SearchPageSideContent>
				} */}
			</SearchPageResultsContent>
			<SearchPageControls>
				<button onClick={() => page <= 0 ? setPage(page - 1) : ''}>
					<ChevronLeft />
				</button>
				<button onClick={() => setPage(page + 1)}>
					<ChevronRight />
				</button>
			</SearchPageControls>
		</SearchPageStyle>
	)
}