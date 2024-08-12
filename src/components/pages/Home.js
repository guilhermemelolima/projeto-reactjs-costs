import style from "./Home.module.css";

import LinkButton from "../layout/LinkButton";

import saving from "../../img/savings.svg";

function Home() {
	return (
		<div className={style.home_container}>
			<h1>
				Bem-vindo ao <span>Cost</span>
			</h1>
			<p>Comece a gerenciar os seus projetos agora mesmo</p>
			<LinkButton to="/new-project" text="Criar Projeto" />
			<img src={saving} alt="Costs" />
		</div>
	);
}

export default Home;
