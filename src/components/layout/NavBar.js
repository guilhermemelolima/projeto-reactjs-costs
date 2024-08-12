import { Link } from "react-router-dom";

// LAYOUT
import Container from "./Container";

// CSS
import style from "./NavBar.module.css";

// IMAGENS
import logo from "../../img/costs_logo.png";

function NavBar() {
	return (
		<nav className={style.navbar}>
			<Container>
				<Link to="/">
					<img src={logo} alt="Logo Costs" />
				</Link>
				<ul className={style.list}>
					<li className={style.item}>
						<Link to="/">Home</Link>
					</li>
					<li className={style.item}>
						<Link to="/empresa">Empresa</Link>
					</li>
					<li className={style.item}>
						<Link to="/projects">Projetos</Link>
					</li>
					<li className={style.item}>
						<Link to="/contato">Contato</Link>
					</li>
				</ul>
			</Container>
		</nav>
	);
}

export default NavBar;
