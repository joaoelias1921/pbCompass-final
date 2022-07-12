import styles from "./Login.module.scss";
import Logo from "assets/login/compass-logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BiLock } from "react-icons/bi";

export default function Login() {
	const navigate = useNavigate();

	function redirectToHome() {
		navigate("/home");
	}

	return (
		<>
			<section className={styles.leftContainer}>
				<div className={styles.loginContainer}>
					<div className={styles.titleContainer}>
						<h3 className={styles.titleContainer__title}>Olá,</h3>
						<p className={styles.titleContainer__text}>Para continuar navegando de forma segura, efetue o login na rede.</p>
					</div>
					<div className={styles.loginForm}>
						<h3 className={styles.loginForm__title}>Login</h3>
						<div className={styles.inputContainer}>
							<input type="email" placeholder="Usuário"/>
							<AiOutlineUser size={25} />
						</div>
						<div className={styles.inputContainer}>
							<input type="password" placeholder="Senha"/>
							<BiLock size={25} />
						</div>
						<div className={styles.buttonContainer}>
							<button 
								onClick={() => redirectToHome()}
								className={styles.buttonContainer__button}
							>Continuar
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.bgContainer}>
				<img src={Logo} alt="Compass Logo" />
			</section>
		</>
	);
}