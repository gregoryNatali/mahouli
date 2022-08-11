import { Carousel } from "../../components/Carousel";
import { QuoteBar } from "../../components/QuoteBar";
import { AnimesPageContainer } from "./styles";

export function AnimesPage() {

  return(
    <AnimesPageContainer>
      <QuoteBar />
      <Carousel />
      <h1>ANIME</h1>
    </AnimesPageContainer>
  )
}