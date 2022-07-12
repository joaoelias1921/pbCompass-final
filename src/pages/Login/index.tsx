import styles from "./Login.module.scss";
import stylesTema from "styles/Tema.module.scss";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
	const navigate = useNavigate();
	
	function redirectToHome() {
		navigate("/home");
	}

	return (
		<section>
			<h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>
			<div className={styles.recomendados}>
			</div>
			<h3 className={stylesTema.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}