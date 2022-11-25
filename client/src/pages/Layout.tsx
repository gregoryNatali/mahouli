import { ContentContainer, LayoutContainer, NavbarContainer, LinksContainer, Logout, Footer } from "../styles/Layout";
import { GitHub, LogOut, User } from "react-feather";
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
            {/* <Link to={'/about'}><li>Sobre</li></Link> */}
            {localStorage.getItem('token') &&
              <>
                <Link to={'/list'}><li>Lista</li></Link>
                <Link to={'/account'}><li><User /></li></Link>
                <Logout onClick={logout}>
                  <LogOut />
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
      <Footer>
        <div>
          mahouLi é um projeto open-source &gt;
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/NomikuH8/mahouli">
            <GitHub />
          </a>
        </div>
      </Footer>
    </LayoutContainer>
  )
}