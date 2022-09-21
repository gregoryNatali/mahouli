import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react';
import { getSeasonAnimes } from '../../api/api';
import { QuoteBar } from "../../components/QuoteBar";
import { SeasonAnime } from '../../types/Anime';
import { AnimesPageContainer } from "./styles";

export function AnimesPage() {
  const [seasonAnimes, setSeasonAnimes]: any = useState()

  useEffect(() => {
    getSeasonAnimes(setSeasonAnimes)
    console.log(seasonAnimes)
  }, [])

  if (!seasonAnimes)
    return (
      <div>Loading...</div>
    )
  
  return (
    <AnimesPageContainer>
      <QuoteBar />
      <h1>Animes</h1>
      <div style={{display: 'flex', flex: '1 1 auto', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel style={{width: '98vw'}}>
          {seasonAnimes.map((seasonAnime, index): any => {})}
          
          <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>

          </div>
          {/* <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1549/125495.webp?s=6caad9c553a66b0429e487b41d90358d" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1071/124921.webp?s=38df194322d371f1a7763c4ccd21676f" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1436/124788.webp?s=58abd197dc210810a25a7b3683d58cd3" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1945/126130.webp?s=7c08d660e8dba4e126a8423d2c5e2ae0" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1454/122063.webp?s=de24874d68a6c14d1f25de41722ca0be" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1051/121959.webp?s=d0922d4ee75d0ba7768370f6ec3be8ff" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1120/124644.webp?s=d699febda243c241563e8338ffed4510" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1517/125496.webp?s=5938cf8bb5724f10e48bc894f5dec63c" />
          </div> */}
        </Carousel>
      </div>
    </AnimesPageContainer>
  )
}