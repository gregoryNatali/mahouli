import { ContentContainer, LayoutContainer, NavbarContainer, LinksContainer, Logout } from "../styles/Layout";
import { SearchBar } from "../components/SearchBar";
import { Link, Outlet } from "react-router-dom";

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
            <img src="/logo.svg" alt="" />
          </Link>
          <ul>
            <li><SearchBar /></li>
            <Link to={'/animes'}><li>Animes</li></Link>
            <Link to={'/mangas'}><li>Mangás</li></Link>
            <Link to={'/about'}><li>Sobre</li></Link>
            {localStorage.getItem('token') &&
              <>
								<Link to={'/list'}><li>Lista</li></Link>
                <Link to={'/account'}><li>Conta</li></Link>
                <Logout onClick={logout}>
                  Sair
                </Logout>
              </>
            }
            {!localStorage.getItem('token') &&
              <Link to={'/signin'}><li>Entrar</li></Link>
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