import { useNavigate } from "react-router";
import { SignupPageContainer, StyledSignupForm } from "./styles";

export function SignupPage() {
  const redirect = useNavigate()

  const onSubmit = () => {
    redirect('/animes')
  }

  return (
    <SignupPageContainer>
      <h1>Cadastro</h1>
      <StyledSignupForm onSubmit={onSubmit}>
        <label htmlFor="usernameInput">Nome de usuário:</label>
        <input id="usernameInput" type="text" autoComplete="off" />
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" type="text" autoComplete="on"/>
        <label htmlFor="passwordInput">Senha:</label>
        <input id="passwordInput" type="password" />
        <label htmlFor="repeatPasswordInput">Repetir senha:</label>
        <input id="repeatPasswordInput" type="password" />
        <button type="submit">Cadastrar</button>
      </StyledSignupForm>
    </SignupPageContainer>
  )
}