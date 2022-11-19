import { addToList, checkInList, checkInListMalID, deleteList, setLastList } from "../../api/listManager";
import { AddButton, DeleteButton, EditButton, SeeButton } from "./styles";
import { EntryList } from "../../types/Database";
import { isUserLogged } from "../../api/useful";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";
import { EditModal } from "../EditModal";

interface listProps {
	entry: Anime | Manga
	isAnime: 'anime' | 'manga'
	seeButton?: boolean
	deleteButton?: boolean
	setShouldUpdate?: any
}

export function AddToListButton({ 
	entry,
	isAnime,
	deleteButton,
	seeButton,
	setShouldUpdate
}: listProps) {
	const [alreadyInList, setAlreadyInList] = useState<boolean>(false)
	const [modalValue, setModalValue] = useState<EntryList | any>()
	const redirect = useNavigate()

	useEffect(() => {
		setAlreadyInList(Boolean(checkInList(entry, isAnime)))
	}, [entry])

	const handleAddButton = () => {
		setAlreadyInList(true)
		addToList(entry, isAnime)
	}

	const handleSeeButton = () => {
		setLastList(isAnime)
		redirect(`/list#mal_id${entry.mal_id}`)
	}

	const handleEditButton = () => {
		setModalValue(checkInListMalID(entry.mal_id, isAnime))
	}

	const handleDeleteButton = async () => {
		await deleteList(entry, isAnime)
		setShouldUpdate(true)
		redirect(`/list`)
	}
	
	return (
		<>
		{isUserLogged() ?
			<>
			{!alreadyInList ?
				<>
				<AddButton onClick={handleAddButton}>
					Adicionar à lista
				</AddButton>	
				</>
			:
				<>
				{ seeButton ?
					<SeeButton onClick={handleSeeButton}>
						Ver na lista
					</SeeButton>
				: <></>}
				<EditButton onClick={handleEditButton}>
					Editar entrada
				</EditButton>
				<EditModal
					propEntry={modalValue}
				/>
				{deleteButton ?
					<DeleteButton onClick={handleDeleteButton}>
						Remover
					</DeleteButton>
				:	<></>}
				</>
			}
			</>
		: <></> }
		</>
	)
}