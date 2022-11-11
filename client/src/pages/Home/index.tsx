import { HomeContainer, HomeContentContainer } from "./styles"
import { WelcomeBar } from "../../components/WelcomeBar"

export function Home() {

  return (
    <HomeContainer>
      <WelcomeBar
        gifType="wave"
      />
      <HomeContentContainer>
        <h1>Bem vindo ao <strong>mahouLi</strong>!</h1>
        <h3>A maior plataforma de informação e listagem de animes e mangás</h3>
      </HomeContentContainer>
    </HomeContainer>
  )
}