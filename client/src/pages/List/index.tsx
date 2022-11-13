import { ListDiv, ListEmptyError, ListItem } from "./styles";
import { getLastList, getList } from "../../api/listManager";
import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";
import { Link } from "react-router-dom";
import { KnownAnime } from "../../types/Database";

export function ListPage() {
	const [showingList, setShowingList] = useState<'anime' | 'manga'>(getLastList())
	const [list, setList] = useState<any[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		getList(setList, setLoading, showingList ? showingList : 'anime')
	}, [showingList])

	if (loading)
		return <p>Loading...</p>

	return (
		<ListDiv>
			buscar lista de
			<button onClick={() => setShowingList('anime')}>Animes</button>
			<button onClick={() => setShowingList('manga')}>Mangás</button>
			{list.map((val, idx) => <ListItem>
				<p>{ idx }</p>
				<p>{val.anime.title}</p>
				<img src={val.anime.img_url} alt="" />
			</ListItem>)}
			{!list.length && !loading ? <ListEmptyError>
				<p>Sua lista está vazia :(</p>
				<p>Procure animes e mangás novos aqui:</p>
				<div>
					<Link to={'/animes'}>Animes</Link>
					<Link to={'/mangas'}>Mangás</Link>
				</div>
			</ListEmptyError> : <></> }
		</ListDiv>
	)
}