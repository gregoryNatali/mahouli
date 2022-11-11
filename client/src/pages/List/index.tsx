import { getList } from "../../api/listManager";
import { ListDiv, ListItem } from "./styles";
import { useEffect, useState } from "react";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";

export function ListPage() {
	const [list, setList] = useState<Anime[] | Manga[]>([])

	useEffect(() => {
		getList(setList, location.pathname)
	}, [])

	return (
		<ListDiv>
			{list.map((val, idx) => <ListItem>
				<p>{ idx + 1 }</p>
				<p>{val.title}</p>
				<img src={val.images.jpg.small_image_url} alt="" />
			</ListItem>)}
		</ListDiv>
	)
}