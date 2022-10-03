import { useNavigate } from "react-router";
import { FormEvent } from 'react'
// import { StyledForm } from "../../components/StyledForm";
import { SigninPageContainer, StyledSigninForm } from "./styles";
import { sendLogin } from "../../api/userManager";

export function SigninPage() {
  const redirect = useNavigate()

  const onSubmit = (e: React.SyntheticEvent ) => {
    e.preventDefault()
    
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    sendLogin(target.email.value, target.password.value)

    redirect('/')
  }

  return(
    <SigninPageContainer>
      <h1>Login</h1>
      <StyledSigninForm onSubmit={onSubmit}>
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" name="email" type="email" autoComplete="on"/>
        <label htmlFor="passwordInput">Senha:</label>
        <input id="passwordInput" name="password" type="password" />
        <button type="submit">Entrar</button>
      </StyledSigninForm>
    </SigninPageContainer>
  )
}