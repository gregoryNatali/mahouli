import { EntryList } from "../../types/Database";
import { useEffect, useState } from "react";
import { Dimmer, ModalDiv } from "./styles";

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
		<Dimmer onClick={handleClose} className={entry ? 'active' : ''}>
			<ModalDiv>
				
			</ModalDiv>
		</Dimmer>
	)
}