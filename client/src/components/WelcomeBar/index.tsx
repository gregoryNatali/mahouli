import { QuoteBarContainer, QuoteImageContainer, QuoteTextContainer } from "./styles";
import { useEffect, useState } from "react";

type WelcomeBarProps = {
  gifType: "wave" | "poke" | "think"
}

export function WelcomeBar({ gifType }: WelcomeBarProps) {
  const [gifUrl, setGifUrl] = useState<string>('')

  useEffect(() => {
    async function loadAnimeGif() {
      const req = await fetch(`https://nekos.best/api/v2/${gifType}`)
      const data = await req.json()
      setGifUrl(data.results[0].url)
    }
    loadAnimeGif()
  }, [])

  return (
    <QuoteBarContainer>
      <QuoteTextContainer>
        <h1>Seja Bem Vindo!</h1>
        <h3>~Ohayo</h3>
      </QuoteTextContainer>
      <QuoteImageContainer>
        <img src={gifUrl} alt={`${gifType} anime gif`}/>
      </QuoteImageContainer>
    </QuoteBarContainer>
  )
}