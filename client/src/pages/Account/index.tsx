import {
  AccountPageContainer,
  ContentSideContainer,
  FavoritesContainer,
  FavoritesListContainer,
  ListContainer,
  ProfileContainer,
  StyledListButton,
  UserSideContainer
} from "./styles"
import { getOwnAccount, verifyLogin } from "../../api/userManager"
import { isUserLogged } from "../../api/useful"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { User } from "../../types/User"
import Carousel from 'nuka-carousel'

export function AccountPage() {
  const [account, setAccount] = useState<User>()
  const redirect = useNavigate()

  const formatDate = (date: string) => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    const day = date.slice(8)

    return `${day}/${month}/${year}`
  }

  useEffect(() => {
    if (isUserLogged()) {
      verifyLogin(redirect).then(() => getOwnAccount(setAccount))
      return
    }

    redirect('/signin')
  }, [])

  if (!account) {
    redirect('/signin')
    return (<></>)
  }

  return (
    <AccountPageContainer>
      <UserSideContainer>
        <ProfileContainer>
          <h3>{account.name}</h3>
          <img src={
            account.profile_picture
              ? 'http://localhost:8080/images/users/' + account.profile_picture
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          }
            alt="user profile picture" />
          <button onClick={() => redirect('/update-pfp')}>Alterar imagem de perfil</button>
        </ProfileContainer>
        <ListContainer>
          <div className="listText">
            <h4>Listas</h4>
          </div>
          <div className="buttonsContainer">
            <StyledListButton>Animes</StyledListButton>
            <StyledListButton>Mangás</StyledListButton>
          </div>
          <div className="entryDateContainer">
            <span>Membro desde:</span>
            <span>{formatDate(account.join_date)}</span>
          </div>
        </ListContainer>
      </UserSideContainer>
      <ContentSideContainer>
        <FavoritesContainer>
          <h4>Favoritos</h4>
          <FavoritesListContainer>
            {account.entries
              ?
              <Carousel style={{ width: '70vw' }}>
                {account.entries?.map(entry => entry.anime.name)}
              </Carousel>
              :
              <h2>Nenhum favorito encontrado!</h2>
            }
          </FavoritesListContainer>
        </FavoritesContainer>
      </ContentSideContainer>
    </AccountPageContainer>
  )
}