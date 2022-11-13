import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getRandomMangas } from '../../api/jikanApi';
import { WelcomeBar } from "../../components/WelcomeBar";
import { formattedData as Manga } from '../../types/SeasonAnime';
import { MangasPageContainer } from "./styles";

export function MangasPage() {
  const [randomMangas, setRandomMangas]: any = useState()
  const redirect = useNavigate()

  useEffect(() => {
    getRandomMangas(setRandomMangas)
  }, [])

  if (!randomMangas) {
    return (
      <div>Loading...</div>
    )
  }
  console.log(randomMangas)
  return (
    <MangasPageContainer>
      <WelcomeBar
        gifType="think"
      />
      <h1>Mangás</h1>
      <div style={{ display: 'flex', flex: '1 1 auto', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel slidesToShow={7} style={{ width: '98vw' }}>
          {randomMangas.map((randomManga: Manga) => (
            <img
              key={randomManga.malId}
              src={randomManga.image}
              alt={`${randomManga.name} Cover`}
              width={180}
              height={280}
              onDoubleClick={() => redirect(`/manga/${randomManga.malId}`)}
            />
          ))}
        </Carousel>
      </div>
    </MangasPageContainer>
  )
}