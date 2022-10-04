import { Link, Outlet } from "react-router-dom";
import { ContentContainer, LayoutContainer, NavbarContainer, LinksContainer } from "../styles/Layout";

export function Layout() {
	return (
		<LayoutContainer>
			<NavbarContainer>
        <LinksContainer>
        <Link to={'/'}>mahouLi</Link>
        <ul>
					<li><Link to={'/animes'}>Animes</Link></li>
					<li><Link to={'/mangas'}>Mangás</Link></li>
					<li><Link to={'/about'}>Sobre</Link></li>
					<li><Link to={ localStorage.getItem('token') ? '/account' : '/signin' }>Conta</Link></li>
				</ul>
        </LinksContainer>
			</NavbarContainer>
			<ContentContainer className="content">
				<Outlet />
			</ContentContainer>
		</LayoutContainer>
	)
}