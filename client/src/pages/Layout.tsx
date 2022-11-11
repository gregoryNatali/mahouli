import { Link, Outlet } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { ContentContainer, LayoutContainer, NavbarContainer, LinksContainer, Logout } from "../styles/Layout";

export function Layout() {

  const logout = () => {
    localStorage.removeItem('token')
    document.location.reload()
  }

  return (
    <LayoutContainer>
      <NavbarContainer>
        <LinksContainer>
          <Link to={'/'}>
            <img src="/public/logo.svg" alt="" />
          </Link>
          <ul>
            <li><SearchBar /></li>
            <li><Link to={'/animes'}>Animes</Link></li>
            <li><Link to={'/mangas'}>Mangás</Link></li>
            <li><Link to={'/about'}>Sobre</Link></li>
            {localStorage.getItem('token') &&
              <>
                <li><Link to={'/account'}>Conta</Link></li>
                <Logout onClick={logout}>
                  Sair
                </Logout>
              </>
            }
            {!localStorage.getItem('token') &&
              <li><Link to={'/signin'}>Entrar</Link></li>
            }
          </ul>
        </LinksContainer>
      </NavbarContainer>
      <ContentContainer className="content">
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  )
}