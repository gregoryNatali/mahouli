import { checkInListMalID } from "../../api/listManager";
import { useNavigate, useParams } from "react-router";
import { EntryList } from "../../types/Database";
import { isUserLogged } from "../../api/useful";
import { useEffect, useState } from "react";
import { EditPageDiv } from "./styles";

function returnDateString(str: string) {
	return new Date(str).toLocaleDateString()
}

export function EditPage() {
	const [info, setInfo] = useState<EntryList>()
	const { mal_id } = useParams()
	const redirect = useNavigate()

	useEffect(() => {
		if (!mal_id || !isUserLogged()) {
			redirect('/list')
			return
		}
		const result = checkInListMalID(
			parseInt(mal_id),
			location.pathname.split('/')[1] as 'anime' | 'manga'
		)

		if (!result) {
			redirect('/list')
			return
		}

		setInfo(result)
	}, [])

	const checkOnChangeEP = () => {
		const element = document.querySelector<HTMLInputElement>('#episodes')!
		const episodes = parseInt(element!.value)

		if (episodes > info?.anime.total_episodes!) {
			element.value = info?.anime.total_episodes.toString()!
			return
		}

		if (episodes < 0)
			element.value = '0'
	}

	return (
		<EditPageDiv>
			<div>
				<h3>Editar item da lista</h3>
				<span>{info?.anime.name}</span>
				<div>
					Progresso:
					<input
						id="episodes"
						type="number"
						min={0}
						max={info?.anime.total_episodes}
						defaultValue={info?.progress}
						onChange={checkOnChangeEP} />
					/{info?.anime.total_episodes}</div>
				<div>Pontuação: {info?.score}</div>
				<div>Data de início: {returnDateString(info?.start_date!)}</div>
				<div>Data de término: {info?.finish_date ? returnDateString(info.finish_date) : 'não terminado'}</div>
			</div>
			<form>

			</form>
		</EditPageDiv>
	)
}