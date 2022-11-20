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
            <h4>Animes</h4>
            <Carousel style={{width: '70vw'}}>
              <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1764/126627.webp?s=ba82e9355d87fd63cce13c794d7112e3" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1271/127700.webp?s=99c38329dd2c1a2ff6604c8c9ccc575d" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1400/123773.webp?s=390219d25976cba49deb877c114533eb" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1539/128058.webp?s=f75a062a043cd5d10cbef28f91c7746e" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1874/121869.webp?s=bbc301a472714543197ac6d0aeae260c" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1554/127014.webp?s=a1dc07cb3074c9394ef18b696fabe6c2" />
              </div>
              <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1418/123904.webp?s=a3499c21f7ac441424817f443db9017b" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1085/126580.webp?s=52475b0864a674d5288316f6483a242e" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1949/121871.webp?s=9297e2e9bc8a248a090f119c45c4f791" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1855/128059.webp?s=916d157e88fef2cdf4b03a3bcb3582ef" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1498/121952.webp?s=1c30a371cf5929a0530ff3d2cfbf690e" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1476/125643.webp?s=a6b0e32d284e4eab04f407498376f173" />
              </div>
            </Carousel>
          </FavoritesListContainer>

          <FavoritesListContainer>
            <h4>Mangás</h4>
            <Carousel style={{width: '70vw'}}>
              <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1806/126216.webp?s=df8704391a49a3de82e6e0d59a755f20" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1228/125011.webp?s=981834f76da23dfccfbed97383400060" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1111/127508.webp?s=6c6c6f5923e2847f4fe7c479e3b63e73" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1483/126005.webp?s=a732a6d2d907d57e9dc8bb85bf194800" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1713/126442.webp?s=1e431f8b365f02fc8264d1215329176a" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1408/127129.webp?s=e8721e68ad7080ed3b23562e81bc0d81" />
              </div>
              <div style={{ display: 'flex', userSelect: 'none', gap: '0.5rem' }}>
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1648/126110.webp?s=78d04d881ac80cb3329ec2f373583214" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1114/119526.webp?s=8bc83a121328539757b204fa12489c5a" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1476/125643.webp?s=a6b0e32d284e4eab04f407498376f173" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1855/128059.webp?s=916d157e88fef2cdf4b03a3bcb3582ef" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1498/121952.webp?s=1c30a371cf5929a0530ff3d2cfbf690e" />
                <img src="https://cdn.myanimelist.net/r/160x220/images/anime/1949/121871.webp?s=9297e2e9bc8a248a090f119c45c4f791" />
              </div>
            </Carousel>
          </FavoritesListContainer>
        </FavoritesContainer>
      </ContentSideContainer>
    </AccountPageContainer>
  )
}