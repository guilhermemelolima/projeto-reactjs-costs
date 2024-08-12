import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";

import style from "./Footer.module.css";

function Footer() {
	return (
		<footer className={style.footer}>
			<ul className={style.social_list}>
				<li>
					<FaFacebookSquare />
				</li>
				<li>
					<FaInstagramSquare />
				</li>
				<li>
					<FaLinkedin />
				</li>
			</ul>
			<p className={style.copy_rigth}>
				<span>Costs &copy; 2024 </span>
			</p>
		</footer>
	);
}

export default Footer;
