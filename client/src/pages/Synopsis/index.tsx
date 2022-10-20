import { SynopsisPageContainer } from "./styles";
import { Anime } from "../../types/Anime";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function SynopsisPage() {
	const [anime, setAnime] = useState<Anime>()
	const { id } = useParams()

	useEffect(() => {

	})

	if (!anime)
		return (
			<div>Loading...</div>
		)

  return(
    <SynopsisPageContainer>
			
    </SynopsisPageContainer>
  )
}