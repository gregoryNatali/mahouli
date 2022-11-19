import { SigninPageContainer, StyledSigninForm } from "./styles";
import { sendLogin, verifyLogin } from "../../api/userManager";
import { isUserLogged } from "../../api/useful";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function SigninPage() {
  const [wentWrong, setWentWrong] = useState<string>()
  const redirect = useNavigate()

  useEffect(() => {
		if (isUserLogged())
			verifyLogin(redirect)
  }, [])

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    sendLogin(target.email.value, target.password.value, redirect, setWentWrong)

  }

  return (
    <SigninPageContainer>
      <h1>Login</h1>
      <StyledSigninForm onSubmit={onSubmit}>
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" name="email" type="email" autoComplete="on" />
        <label htmlFor="passwordInput">Senha:</label>
        <input id="passwordInput" name="password" type="password" />
        <button type="submit">Entrar</button>
				<span>{wentWrong}</span>
      </StyledSigninForm>
      <span onClick={() => redirect('/signup')}>Não possuo uma conta :(</span>
    </SigninPageContainer>
  )
}