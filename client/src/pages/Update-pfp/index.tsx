import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { changePFP } from "../../api/userManager";
import { isUserLogged } from "../../api/useful";
import { PfpDiv, PfpForm } from "./styles";

export function UpdatePfp() {
  const [wentWrong, setWentWrong] = useState<string>()
  const redirect = useNavigate()

  useEffect(() => {
    if (!isUserLogged())
      redirect('/')
  }, [])

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const val = document.querySelector<HTMLInputElement>('#pfpInput')!.files?.item(0)
    if (!val) {
      setWentWrong('É necessário colocar uma imagem!')
      return
    }

    const data = await changePFP(val)

    if (data.success) {
      redirect('/account')
      location.reload()
      return
    }

    setWentWrong('Algo deu errado!')
  }

  return (
    <PfpDiv>
      <PfpForm onSubmit={handleSubmit}>
        <h3>Mudar imagem de perfil</h3>
        <input
          type="file"
          id="pfpInput"
          required
          accept=".jpg,.jpeg,.png,.gif,.webp"
        />
        <span>{wentWrong}</span>
        <button type="submit">Trocar</button>
      </PfpForm>
    </PfpDiv>
  )
}
