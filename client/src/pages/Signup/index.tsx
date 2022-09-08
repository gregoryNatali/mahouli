import { SignupPageContainer, StyledSignupForm } from "./styles";

export function Signup() {

  return (
    <SignupPageContainer>
      <h1>Cadastro</h1>
      <StyledSignupForm>
        <label htmlFor="nameInput">Nome:</label>
        <input id="nameInput" type="text" />
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" type="text" />
        <label htmlFor="passwordInput">Senha:</label>
        <input id="passwordInput" type="text" />
        <label htmlFor="repeatPasswordInput">Repetir senha:</label>
        <input id="repeatPasswordInput" type="text" />
        <button type="submit">Cadastrar</button>
      </StyledSignupForm>
    </SignupPageContainer>
  )
}