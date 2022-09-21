import { useNavigate } from "react-router";
// import { StyledForm } from "../../components/StyledForm";
import { SigninPageContainer, StyledSigninForm } from "./styles";

export function SigninPage() {
  const redirect = useNavigate()

  const onSubmit = () => {
    redirect('/animes')
  }


  return(
    <SigninPageContainer>
      <h1>Login</h1>
      <StyledSigninForm onSubmit={onSubmit}>
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" type="text" autoComplete="on"/>
        <label htmlFor="passwordInput">Senha:</label>
        <input id="passwordInput" type="password" />
        <button type="submit">Entrar</button>
      </StyledSigninForm>
    </SigninPageContainer>
  )
}