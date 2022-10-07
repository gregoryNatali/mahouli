import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { sendRegister } from "../../api/userManager";
import { SignupPageContainer, StyledSignupForm } from "./styles";

export function SignupPage() {
  const [wentWrong, setWentWrong] = useState<string>()
  const redirect = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token'))
			redirect('/')
	})

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
      username : { value: string }
      repeatPassword : { value: string }
    }
    
    if (target.password.value !== target.repeatPassword.value) {
      setWentWrong('As senhas não coincidem')
      return
    }

    const retData = await sendRegister(target.username.value, target.email.value, target.password.value, redirect)
		if (retData)
			setWentWrong(retData.message)
  }



  return (
    <SignupPageContainer>
      <h1>Cadastro</h1>
      <StyledSignupForm onSubmit={onSubmit}>
        <div>
          <label htmlFor="usernameInput">Nome de usuário:</label>
          <input id="usernameInput" name="username" type="text" autoComplete="off" />
          <label htmlFor="emailInput">Email:</label>
          <input id="emailInput" name="email" type="email" autoComplete="on"/>
          <label htmlFor="passwordInput">Senha:</label>
          <input id="passwordInput" name="password" type="password" />
          <label htmlFor="repeatPasswordInput">Repetir senha:</label>
          <input id="repeatPasswordInput" name="repeatPassword" type="password" />
          <button type="submit">Cadastrar</button>
        </div>
        <span>{wentWrong}</span>
      </StyledSignupForm>
      <span onClick={() => redirect('/signin')}>Já possuo uma conta</span>
    </SignupPageContainer>
  )
}