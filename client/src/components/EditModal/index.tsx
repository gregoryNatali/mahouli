import { EntryList } from "../../types/Database";
import { useEffect, useState } from "react";
import { Dimmer, ModalDiv } from "./styles";
import { X } from "react-feather";

interface ModalProps {
	propEntry: EntryList | false
}

export function EditModal({ propEntry }: ModalProps) {
	const [entry, setEntry] = useState<EntryList>()

	useEffect(() => {
		setEntry(propEntry ? propEntry : undefined)
	}, [propEntry])

	const handleClose = () => {
		setEntry(undefined)
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
					<input type={'range'} min={0} max={10} />
				</div>
			</ModalDiv>
		</Dimmer>
	)
}