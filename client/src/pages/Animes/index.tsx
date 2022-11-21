import { formattedData as SeasonAnime } from '../../types/SeasonAnime';
import { WelcomeBar } from "../../components/WelcomeBar";
import { getSeasonAnimes } from '../../api/jikanApi';
import { AnimesPageContainer } from "./styles";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Carousel from 'nuka-carousel';

export function AnimesPage() {
  const [seasonAnimes, setSeasonAnimes]: any = useState()
  const redirect = useNavigate()

  useEffect(() => {
    getSeasonAnimes(setSeasonAnimes)
  }, [])

  if (!seasonAnimes)
    return (
      <div>Loading...</div>
    )


  return (
    <AnimesPageContainer>
      <WelcomeBar
        gifType="poke"
      />
      <h1>Animes</h1>

			<div className='carousel-wrapper'>
        <Carousel slidesToShow={7} style={{ overflowX: 'clip', userSelect: 'none' }}>
          {seasonAnimes.map((seasonAnime: SeasonAnime) => (
            <img
              key={seasonAnime.malId}
              src={seasonAnime.image}
              alt={`${seasonAnime.name} Cover`}
              width={180}
              height={280}
              onDoubleClick={() => redirect(`/anime/${seasonAnime.malId}`)}
            />
          ))}
        </Carousel>
      </div>
    </AnimesPageContainer>
  )
}