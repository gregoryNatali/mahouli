import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react';
import { getRandomMangas } from '../../api/jikanApi';
import { QuoteBar } from "../../components/QuoteBar";
import { formattedData as Manga} from '../../types/SeasonAnime';
import { MangasPageContainer } from "./styles";

export function MangasPage() {
  const [randomMangas, setRandomMangas]: any = useState()

  useEffect(() => {
    getRandomMangas(setRandomMangas)
  }, [])

  if(!randomMangas) {
    return (
      <div>Loading...</div>
    )
  }
  console.log(randomMangas)
  return(
    <MangasPageContainer>
      <QuoteBar />
      <h1>Mangás</h1>
      <div style={{display: 'flex', flex: '1 1 auto', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel slidesToShow={7} style={{width: '98vw'}}>
          {randomMangas.map((randomManga: Manga) => (
            <img 
              key={randomManga.malId}
              src={randomManga.image} 
              alt={`${randomManga.name} Cover`}
              width={180}
              height={280} 
            />
          ))}
        </Carousel>
      </div>
    </MangasPageContainer>
  )
}