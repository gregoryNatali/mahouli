import { getSeasonAnimes } from '../../api/jikanApi';
import { QuoteBar } from "../../components/QuoteBar";
import { formattedData as SeasonAnime } from '../../types/SeasonAnime';
import { AnimesPageContainer } from "./styles";
import { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel'
import { useNavigate } from 'react-router';

export function AnimesPage() {
  const [seasonAnimes, setSeasonAnimes]: any = useState()
  const redirect = useNavigate()

  const handleRedirectToAnimePage = (malId: string) => {
    redirect(`/anime/${malId}`)
  }

  useEffect(() => {
    getSeasonAnimes(setSeasonAnimes)
  }, [])

  if (!seasonAnimes)
    return (
      <div>Loading...</div>
    )

    console.log(seasonAnimes)

  return (
    <AnimesPageContainer>
      <QuoteBar />
      <h1>Animes</h1>

      <div style={{ display: 'flex', flex: '1 1 auto', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel slidesToShow={7} style={{ width: '100vw', userSelect: 'none' }}>
          {seasonAnimes.map((seasonAnime: SeasonAnime) => (
            <img 
              key={seasonAnime.malId} 
              src={seasonAnime.image} 
              alt={`${seasonAnime.name} Cover`} 
              width={180}
              height={280}
              onDoubleClick={() => handleRedirectToAnimePage(seasonAnime.malId)}
            />
          ))}
        </Carousel>
      </div>
    </AnimesPageContainer>
  )
}