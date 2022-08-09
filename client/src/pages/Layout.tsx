import { Link, Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li><Link to={'/'}></Link></li>
					<li></li>
					<li></li>
				</ul>
			</nav>
			<div className="content">
				<Outlet />
			</div>
		</>
	)
}

export default Layout