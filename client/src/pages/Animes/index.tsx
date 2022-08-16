import Carousel from 'nuka-carousel'
import { QuoteBar } from "../../components/QuoteBar";
import { AnimesPageContainer } from "./styles";

export function AnimesPage() {

  return(
    <AnimesPageContainer>
      <QuoteBar />
      <h1>ANIME</h1>
      <div style={{width: '700px', alignItems: 'center', justifyContent: 'center'}}>
      <Carousel
        >
        <div style={{display: 'flex'}}>
          <img src="https://mopi.com.br/wp-content/uploads/2020/05/Numero1.jpg" width='150px' height='150px' />
          <img src="https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8292993-stock-photo-the-number-2-in-gold.jpg" width='150px' height='150px' alt="" />
          <img src="https://escolaeducacao.com.br/wp-content/uploads/2020/04/numero3.jpg" width='150px' height='150px' alt="" />
          <img src="https://medias.lojaslinna.com.br/general/1176408_1_fullsize.jpg" width='150px' height='150px' alt="" />
        </div>
        <div style={{display: 'flex'}}>
          <img src="https://mopi.com.br/wp-content/uploads/2020/05/Numero1.jpg" width='150px' height='150px' />
          <img src="https://static8.depositphotos.com/1338574/829/i/600/depositphotos_8292993-stock-photo-the-number-2-in-gold.jpg" width='150px' height='150px' alt="" />
          <img src="https://escolaeducacao.com.br/wp-content/uploads/2020/04/numero3.jpg" width='150px' height='150px' alt="" />
          <img src="https://medias.lojaslinna.com.br/general/1176408_1_fullsize.jpg" width='150px' height='150px' alt="" />
        </div>
      </Carousel>
        </div>
    </AnimesPageContainer>
  )
}