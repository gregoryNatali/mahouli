import { SigninPageContainer, StyledSigninForm } from "./styles";
import { sendLogin, verifyLogin } from "../../api/userManager";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function SigninPage() {
	const [wentWrong, setWentWrong] = useState<string>()
  const redirect = useNavigate()

	useEffect(() => {
		verifyLogin(redirect)
	}, [])

  const onSubmit = async (e: React.SyntheticEvent ) => {
    e.preventDefault()
    
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    const result = await sendLogin(target.email.value, target.password.value, redirect)

		setWentWrong(result.message)
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
      <span onClick={() => redirect('/signup')}>Não possuo uma conta :(</span>
    </SigninPageContainer>
  )
}