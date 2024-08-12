import style from "./SubmitButton.module.css";

function SubmitButton({ text }) {
	return (
		<div className={style.input}>
			<button className={style.btn}>{text}</button>
		</div>
	);
}

export default SubmitButton;
