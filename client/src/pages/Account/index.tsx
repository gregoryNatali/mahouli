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
import { Account } from "../../types/User"
import Carousel from 'nuka-carousel'


const regex = /.+(?=t\.jpg|t\.webp)|(?=l\.jpg|l\.webp)/gm
function createImageUrl(link: string) {
  const result = regex.exec(link)
  return result![0] + '.jpg'
}


export function AccountPage() {
  const [account, setAccount] = useState<Account>()
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
          <h3>{account.user.name}</h3>
          <img src={
            account.user.profile_picture
              ? 'http://localhost:8080/images/users/' + account.user.profile_picture
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
            <span>{formatDate(account.user.join_date)}</span>
          </div>
        </ListContainer>
      </UserSideContainer>
      <ContentSideContainer>
        <FavoritesContainer>
          <h4>Favoritos</h4>
          <FavoritesListContainer>
            <h4>Animes</h4>
            {account.entries
              ?
              <Carousel style={{ width: '70vw' }}>
                {account.entries?.map((entry, idx) => {
                  if (entry.is_anime) return (
                    <img
                      key={idx}
                      src={createImageUrl(entry.anime.img_url)}
                      alt={`${entry.anime.name} Cover`}
                      width={180}
                      height={280}
                      onDoubleClick={() => redirect(`/anime/${entry.anime.mal_id}`)}
                    />
                  )
                })}
              </Carousel>
              :
              <h2>Nenhum anime favorito encontrado!</h2>
            }
          </FavoritesListContainer>
          <FavoritesListContainer>
            <h4>Mangás</h4>
            {account.entries
              ?
              <Carousel style={{ width: '70vw' }}>
                {account.entries?.map(entry => {
                  if (!entry.is_anime) return (
                    <img
                      key={entry.anime.mal_id}
                      src={entry.anime.img_url}
                      alt={`${entry.anime.name} Cover`}
                      width={180}
                      height={280}
                      onDoubleClick={() => redirect(`/manga/${entry.anime.mal_id}`)}
                    />
                  )
                })}
              </Carousel>
              :
              <h2>Nenhum mangá favorito encontrado!</h2>
            }
          </FavoritesListContainer>
        </FavoritesContainer>
      </ContentSideContainer>
    </AccountPageContainer>
  )
}