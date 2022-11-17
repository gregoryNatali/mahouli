import { addToList, checkInList, deleteList, setLastList } from "../../api/listManager";
import { AddButton, DeleteButton, EditButton, SeeButton } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Anime } from "../../types/Anime";
import { Manga } from "../../types/Manga";

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
		redirect(`/${isAnime}/edit/${entry.mal_id}`)
	}

	const handleDeleteButton = async () => {
		await deleteList(entry, isAnime)
		setShouldUpdate(true)
		redirect(`/list`)
	}

	return (
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
			{deleteButton ?
				<DeleteButton onClick={handleDeleteButton}>
					Remover
				</DeleteButton>
			:	<></>}
			</>
		}
		</>
	)
}