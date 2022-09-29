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
    // console.log(seasonAnimes)
  }, [])

  if (!seasonAnimes)
    return (
      <div>Loading...</div>
    )
  
  let sortedAnimes = []
  for (let i = 0; i < seasonAnimes.length; i++) {
    if ((i + 1) % 8 == 0 || i == 0) {
      sortedAnimes[i].push([])
    }
    const element = seasonAnimes[i];
    
  }

  return (
    <AnimesPageContainer>
      <QuoteBar />
      <h1>Animes</h1>

      <div style={{display: 'flex', flex: '1 1 auto', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel style={{width: '98vw'}}>
          
        {seasonAnimes.map((seasonAnime: SeasonAnime, index: number) => {
          
        })}

          <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1864/122519.webp?s=ba617471a0fad3a2cb79d770acdac79f" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1045/123711.webp?s=b80cf606d52693fadd8a13b0b05eaf49" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1743/125204.webp?s=5383bc7f63e54bb7d120bcaa0a32f27b" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1502/124354.webp?s=c10a8acbd5a0f67e106d36fc766464a5" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1010/124180.webp?s=b1470bdb520a5420f886b80e1dcd0696" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1392/124401.webp?s=286877b96007edc18d15ecb7c26a54c2" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1070/124592.webp?s=3be48a9907e92057bd32625514755671" />
          </div>
          <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1549/125495.webp?s=6caad9c553a66b0429e487b41d90358d" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1071/124921.webp?s=38df194322d371f1a7763c4ccd21676f" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1436/124788.webp?s=58abd197dc210810a25a7b3683d58cd3" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1945/126130.webp?s=7c08d660e8dba4e126a8423d2c5e2ae0" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1454/122063.webp?s=de24874d68a6c14d1f25de41722ca0be" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1051/121959.webp?s=d0922d4ee75d0ba7768370f6ec3be8ff" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1120/124644.webp?s=d699febda243c241563e8338ffed4510" />
            <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1517/125496.webp?s=5938cf8bb5724f10e48bc894f5dec63c" />
          </div>
        </Carousel>
      </div>
    </AnimesPageContainer>
  )
}