import { getCacheList, getLastList, getList, setLastList } from "../../api/listManager";
import { ListContent, ListDiv, ListEmptyError, ListItem } from "./styles";
import { AddToListButton } from "../../components/AddToListButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// todo here:
// 	progress
//	buttons to remove or add progress

export function ListPage() {
	const [showingList, setShowingList] = useState<'anime' | 'manga'>(getLastList())
	const [shouldUpdate, setShouldUpdate] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(true)
	const [list, setList] = useState<any[]>([])

	useEffect(() => {
		getList(setList, setLoading, showingList ? showingList : 'anime')
		setLastList(showingList)
	}, [showingList])

	useEffect(() => {
		setList(getCacheList(showingList))
		setShouldUpdate(false)
	}, [shouldUpdate])

	const parseDate = (date: string) => {
		const newDate = new Date(date)
		return newDate.toUTCString().slice(0, 16)
	}

	if (loading)
		return <p>Loading...</p>

	return (
		<ListDiv>
			<div>
				buscar lista de
				<button onClick={() => setShowingList('anime')}>Animes</button>
				<button onClick={() => setShowingList('manga')}>Mangás</button>
			</div>
			<ListContent>
				<ListItem id="legend">
					<div>
						Posição
					</div>
					<p>Nome do Item</p>
					<div>
						<p>Data de Inserção</p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
					</div>
				</ListItem>

				{list.map((val, idx) => <ListItem key={idx} id={`mal_id${val.anime.mal_id}`}>
					<div>
						<p>{ idx + 1 }</p>
						<img src={val.anime.img_url} alt="" />
					</div>
					<p>{val.anime.name}</p>
					<div>
						<p>{parseDate(val.start_date)}</p>
						<AddToListButton
							entry={val.anime}
							isAnime={showingList}
							deleteButton={true}
							seeButton={false}
							setShouldUpdate={setShouldUpdate} />
					</div>
				</ListItem>)}

				{!list.length && !loading ?
					<ListEmptyError>
						<p>Sua lista está vazia :(</p>
						<p>Procure animes e mangás novos aqui:</p>
						<div>
							<Link to={'/animes'}>Animes</Link>
							<Link to={'/mangas'}>Mangás</Link>
						</div>
					</ListEmptyError> : <></>}
			</ListContent>
		</ListDiv>
	)
}