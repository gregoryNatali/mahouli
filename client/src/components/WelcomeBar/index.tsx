import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QuoteBarContainer, QuoteImageContainer, QuoteTextContainer } from "./styles";

type WelcomBarProps = {
  gifType: "wave" | "poke" | "think"
}

export function WelcomeBar({ gifType }: WelcomBarProps) {
  const [gifUrl, setGifUrl] = useState<string>('')

  useEffect(() => {
    async function loadAnimeGif() {
      const req = await fetch(`https://nekos.best/api/v2/${gifType}`)
      const data = await req.json()
      setGifUrl(data.results[0].url)
      console.log(data)
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
        <img src={gifUrl} />
      </QuoteImageContainer>
    </QuoteBarContainer>
  )
}