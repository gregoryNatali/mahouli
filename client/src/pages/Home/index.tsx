import { QuoteBar } from "../../components/QuoteBar"
import { HomeContainer, HomeContentContainer } from "./styles"

export function Home() {
	return (
		<HomeContainer>
			<QuoteBar />
      <HomeContentContainer>
        <div>
          <h1>Notícias</h1>
          <div>
          <div>
              noticia 1
              <br />
              desc
            </div>
            <div>
              noticia 2
              <br />
              desc
            </div>
            <div>
              noticia 3
              <br />
              desc
            </div>
            
          </div>
        </div>
        <div>
          <h1>Temporada Anime</h1>
          <div>
            <div>
              <h2>Mais Visitados</h2>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1120/124644.webp?s=d699febda243c241563e8338ffed4510" />
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1071/124921.webp?s=38df194322d371f1a7763c4ccd21676f" />
            </div>
            <div>
              <h2>Mais Recentes</h2>
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1120/124644.webp?s=d699febda243c241563e8338ffed4510" />
              <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1071/124921.webp?s=38df194322d371f1a7763c4ccd21676f" />
            </div>
          </div>
        </div>
      </HomeContentContainer>
		</HomeContainer>
	)
}