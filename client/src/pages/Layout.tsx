import { Link, Outlet } from "react-router-dom";
import { ContentContainer, LayoutContainer, NavbarContainer, LinksContainer } from "../styles/Layout";

function Layout() {
	return (
		<LayoutContainer>
			<NavbarContainer>
        <LinksContainer>
        <Link to={'/'}>mahouLi</Link>
        <ul>
					<li><Link to={'/animes'}>Animes</Link></li>
					<li><Link to={'/mangas'}>Mangás</Link></li>
					<li><Link to={'/about'}>Sobre</Link></li>
					<li><Link to={'/account'}>Conta</Link></li>
				</ul>
        </LinksContainer>
			</NavbarContainer>
			<ContentContainer className="content">
				<Outlet />
			</ContentContainer>
		</LayoutContainer>
	)
}

export default Layout