import { Link, Outlet } from "react-router-dom";
import { ContentContainer, LayoutContainer, NavbarContainer, LinksContainer } from "../styles/Layout";

export function Layout() {
	
  const logout = () => {
    localStorage.removeItem('token')
    document.location.reload()
  }
  
  return (
		<LayoutContainer>
			<NavbarContainer>
        <LinksContainer>
        <Link to={'/'}>mahouLi</Link>
        <ul>
					<li><Link to={'/animes'}>Animes</Link></li>
					<li><Link to={'/mangas'}>Mangás</Link></li>
					<li><Link to={'/about'}>Sobre</Link></li>
          {localStorage.getItem('token') &&
            <>
              <li><Link to={'/list'}>Lista</Link></li>
              <li><Link to={'/account'}>Conta</Link></li>
              <li 
                id="logout"
                onClick={logout}
              >
                Sair
              </li>
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