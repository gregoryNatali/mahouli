import { useNavigate } from "react-router";
import { SignupPageContainer, StyledSignupForm } from "./styles";

export function SignupPage() {
  const redirect = useNavigate()

  const onSubmit = (e: React.SyntheticEvent ) => {
    e.preventDefault()
    
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
      username : { value: string }
    }

    sendRegister(target.email.value, target.password.value, target.username.value)

    redirect('/signin')
  }

  function verifyPassword(password: string, repeatPassword: string) {
    if (password === repeatPassword) 
      return 
  }

  return (
    <SignupPageContainer>
      <h1>Cadastro</h1>
      <StyledSignupForm onSubmit={onSubmit}>
        <label htmlFor="usernameInput">Nome de usuário:</label>
        <input id="usernameInput" name="username" type="email" autoComplete="off" />
        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" name="input" type="text" autoComplete="on"/>
        <label htmlFor="passwordInput">Senha:</label>
        <input id="passwordInput" name="password" type="password" />
        <label htmlFor="repeatPasswordInput">Repetir senha:</label>
        <input id="repeatPasswordInput" type="password" />
        <button type="submit">Cadastrar</button>
      </StyledSignupForm>
    </SignupPageContainer>
  )
}