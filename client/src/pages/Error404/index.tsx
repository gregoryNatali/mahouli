import { useEffect, useState } from "react";
import { Error404Container } from "./styles";

export function Error404() {
  const [gif, setGif] = useState<string | undefined>()

  useEffect(() => {
    if (!gif)
      getGif().then((data) => setGif(data))
  }, [])

  const getGif = async () => {
    const req = await fetch(`https://nekos.best/api/v2/facepalm`)
    const data = await req.json()
    return data.results[0].url
  }

  return (
    <Error404Container>
      <h1>404!</h1>
      <p>
        Pode ser que o servidor esteja fora,
        <br />
        Ou você acessou uma página inexistente...
      </p>
      <img src={gif} alt="blush anime gif" />
    </Error404Container>
  )
}