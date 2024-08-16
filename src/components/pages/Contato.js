import { useState } from "react";

import styles from "./Contato.module.css";

function Contato() {
	return (
		<section className={styles.contato_container}>
			<h1>Entre em Contato</h1>
			<p>
				Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou
				precisar de assistência, sinta-se à vontade para entrar em
				contato conosco através dos canais abaixo.
			</p>
			<ul className={styles.contact_info}>
				<li>
					<strong>Email:</strong> contato@empresaexemplo.com.br
				</li>
				<li>
					<strong>Telefone:</strong> (11) 1234-5678
				</li>
				<li>
					<strong>Endereço:</strong> Rua Exemplo, 123, Centro, São
					Paulo - SP
				</li>
			</ul>
			{/*
			<h1>Entre em Contato</h1>
			<p>
				Preencha o formulário abaixo para enviar uma mensagem para nós.
			</p>
			 */}
		</section>
	);
}

export default Contato;
