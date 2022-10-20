import { getSeasonAnimes } from '../../api/jikanApi';
import { QuoteBar } from "../../components/QuoteBar";
import { SeasonAnime } from '../../types/SeasonAnime';
import { AnimesPageContainer } from "./styles";
import { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel'

export function AnimesPage() {
  const [seasonAnimes, setSeasonAnimes]: any = useState()

  useEffect(() => {
    getSeasonAnimes(setSeasonAnimes)
  }, [])

  if (!seasonAnimes)
    return (
      <div>Loading...</div>
    )

  return (
    <AnimesPageContainer>
      <QuoteBar />
      <h1>Animes</h1>

      <div style={{ display: 'flex', flex: '1 1 auto', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel slidesToShow={8} style={{ width: '98vw', userSelect: 'none' }}>
          {seasonAnimes.map((seasonAnime: SeasonAnime) => (
            <img key={seasonAnime.malId} src={seasonAnime.image} alt={`${seasonAnime.name} Cover`} />
          ))}
        </Carousel>
      </div>
    </AnimesPageContainer>
  )
}