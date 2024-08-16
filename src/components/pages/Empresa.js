import styles from "./Empresa.module.css";

function Empresa() {
	return (
		<div className={styles.empresa_container}>
			<h1>Sobre a Empresa</h1>
			<p>
				Bem-vindo à <strong>Tech Solutions</strong>, uma empresa
				dedicada a fornecer soluções inovadoras e tecnológicas para
				empresas em todo o mundo. Com mais de 10 anos de experiência no
				setor, nossa missão é simplificar a tecnologia para que nossos
				clientes possam se concentrar no que realmente importa: crescer
				e expandir seus negócios.
			</p>

			<h2>Nossa História</h2>
			<p>
				Fundada em 2012, a Tech Solutions começou como uma pequena
				startup com uma grande visão: tornar a tecnologia acessível e
				eficiente para empresas de todos os portes. Ao longo dos anos,
				crescemos exponencialmente, construindo uma base sólida de
				clientes satisfeitos e expandindo nosso portfólio de soluções.
				Hoje, somos líderes em inovação tecnológica, com uma equipe de
				especialistas dedicados a desenvolver soluções sob medida para
				os desafios modernos.
			</p>

			<h2>Missão</h2>
			<p>
				<strong>Nossa missão</strong> é transformar a maneira como as
				empresas utilizam a tecnologia, fornecendo ferramentas e
				soluções inovadoras que aumentam a eficiência e promovem o
				sucesso a longo prazo.
			</p>

			<h2>Visão</h2>
			<p>
				<strong>Visão:</strong> Ser reconhecida globalmente como a
				empresa líder em soluções tecnológicas, promovendo impactos
				positivos em todos os setores e transformando o futuro digital.
			</p>

			<h2>Valores</h2>
			<ul>
				<li>
					<strong>Inovação:</strong> Estamos sempre em busca de novas
					ideias e tecnologias.
				</li>
				<li>
					<strong>Qualidade:</strong> Nosso compromisso é entregar
					soluções da mais alta qualidade.
				</li>
				<li>
					<strong>Integridade:</strong> Valorizamos a transparência e
					a honestidade em todos os aspectos do negócio.
				</li>
				<li>
					<strong>Foco no cliente:</strong> Sucesso para nós é
					garantir a satisfação e o sucesso dos nossos clientes.
				</li>
				<li>
					<strong>Colaboração:</strong> Acreditamos que o trabalho em
					equipe é essencial para o sucesso.
				</li>
			</ul>

			<h2>Nossos Serviços</h2>
			<p>
				Na Tech Solutions, oferecemos uma ampla gama de serviços,
				incluindo:
			</p>
			<ul>
				<li>Desenvolvimento de Software Sob Medida</li>
				<li>Consultoria em Tecnologia da Informação</li>
				<li>Integração de Sistemas</li>
				<li>Suporte e Manutenção de Infraestrutura</li>
				<li>Transformação Digital e Automação de Processos</li>
			</ul>

			<h2>Entre em Contato</h2>
			<p>
				Se você está buscando uma parceira confiável para impulsionar
				sua empresa com as mais recentes tecnologias, entre em contato
				conosco! Nossa equipe está pronta para ajudá-lo a encontrar as
				melhores soluções para suas necessidades específicas.
			</p>
		</div>
	);
}

export default Empresa;
