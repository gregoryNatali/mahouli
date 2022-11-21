import { EntryList } from "../../types/Database";
import { useEffect, useState } from "react";
import { Dimmer, ModalDiv } from "./styles";
import { X } from "react-feather";

interface ModalProps {
	propEntry: EntryList | false
}

export function EditModal({ propEntry }: ModalProps) {
	const [entry, setEntry] = useState<EntryList>()
	const [score, setScore] = useState<string | undefined>()
	const [fav, setFav] = useState<boolean>()

	useEffect(() => {
		setEntry(propEntry ? propEntry : undefined)
	}, [propEntry])

	useEffect(() => {
		if (entry)
			setFav(entry.is_anime)
	}, [entry])

	const handleClose = () => {
		setEntry(undefined)
	}

	const changeScore = () => {
		setScore(document.querySelector<HTMLInputElement>('#score')!.value)
	}


	return (
		<Dimmer className={entry ? 'active' : ''}>
			<button onClick={handleClose}><X /></button>
			<ModalDiv>
				<div>
					<span>Data de início</span>
					<input type={'date'} defaultValue={entry?.start_date}/>
				</div>
				<div>
					<span>Data de término</span>
					<input type={'date'} defaultValue={entry?.finish_date} />
				</div>
				<div>
					<span>Nota:</span>
					<input id='score' type={'range'} min={0} max={10} onChange={changeScore} />
					<span>{score}</span>
				</div>
				<div>
					{ fav &&
						<button onClick={() => setFav(false)}>Desfavoritar</button>}
					{ !fav &&
						<button onClick={() => setFav(true)}>Favoritar</button>}
				</div>
			</ModalDiv>
		</Dimmer>
	)
}