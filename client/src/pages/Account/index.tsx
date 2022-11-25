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
import { getOwnAccount, getUser, verifyLogin } from "../../api/userManager"
import { isUserLogged } from "../../api/useful"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Account } from "../../types/User"
import Carousel from 'nuka-carousel'


function createImageUrl(link: string) {
  const regex = /.+(?=t\.jpg|t\.webp)|(?=l\.jpg|l\.webp)/gm
  const result = regex.exec(link)
  return result![0] + '.jpg'
}

function formatDate(date: string) {
  const year = date.slice(0, 4)
  const month = date.slice(5, 7)
  const day = date.slice(8)

  return `${day}/${month}/${year}`
}

function separateEntries(acc: Account, setAnime: any, setManga: any) {
  const animes: any[] = []
  const mangas: any[] = []
  acc.entries.forEach((val) => {
    if (val.is_anime) animes.push(val)
    else mangas.push(val)
  })
  setAnime(animes)
  setManga(mangas)
}

export function AccountPage() {
  const [account, setAccount] = useState<Account>()
  const [favAnimes, setFavAnimes] = useState<any[]>([])
  const [favMangas, setFavMangas] = useState<any[]>([])
  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const innerFunc = async () => {
      if (!isUserLogged()) {
        redirect('/signin')
        return
      }

      await verifyLogin(redirect)
      const newAcc = await getOwnAccount()

      if (!newAcc) {
        redirect('/signin')
        return
      }

      separateEntries(newAcc, setFavAnimes, setFavMangas)
      setAccount(newAcc)
    }
  
    const otherAccount = async () => {
      const newAcc = await getUser(id!)

      separateEntries(newAcc, setFavAnimes, setFavMangas)
      setAccount(newAcc)
    }

    if (!id)
      innerFunc()
    else
      otherAccount()
  }, [])

  if (!account)
    return <div>Loading...</div>

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
          {!id &&
            <button onClick={() => redirect('/update-pfp')}>Alterar imagem de perfil</button>}
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
            <div className="carousel-wrapper">
              {favAnimes.length > 0
                ?
                <Carousel slidesToShow={4} style={{ overflowX: 'clip' }} >
                  {favAnimes.map((entry, idx) =>
                    <img
                      key={idx}
                      src={createImageUrl(entry.anime.img_url)}
                      alt={`${entry.anime.name} Cover`}
                      width={180}
                      height={280}
                      onDoubleClick={() => redirect(`/anime/${entry.anime.mal_id}`)}
                    />
                  )}
                </Carousel>
                :
                <h2>Nenhum anime favorito encontrado!</h2>
              }
            </div>
          </FavoritesListContainer>
          <FavoritesListContainer>
            <h4>Mangás</h4>
            <div className="carousel-wrapper">
              {favMangas.length > 0
                ?
                <Carousel slidesToShow={4} style={{ overflowX: 'clip' }}>
                  {favMangas.map((entry, idx) =>
                    <img
                      key={idx}
                      src={createImageUrl(entry.anime.img_url)}
                      alt={`${entry.anime.name} Cover`}
                      width={180}
                      height={280}
                      onDoubleClick={() => redirect(`/manga/${entry.anime.mal_id}`)}
                    />
                  )}
                </Carousel>
                :
                <h2>Nenhum mangá favorito encontrado!</h2>
              }
            </div>
          </FavoritesListContainer>
        </FavoritesContainer>
      </ContentSideContainer>
    </AccountPageContainer>
  )
}