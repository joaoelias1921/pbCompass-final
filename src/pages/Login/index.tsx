import styles from "./Login.module.scss";
import Logo from "assets/login/compass-logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "common/context/User";
import classNames from "classnames";
import EmailInput from "components/Inputs/emailInput";
import PasswordInput from "components/Inputs/passwordInput";

export default function Login() {
	const navigate = useNavigate();
	const { emailValid, passValid } = useContext(UserContext);

	function redirectToHome() {
		navigate("/home");
	}

	function validateForm() {
		let inputs = document.querySelectorAll("input");
		let error = document.querySelector(".errorContainer")! as HTMLDivElement;
		let valid = true;
		inputs.forEach(input => {
			if(input.value == "") {
				valid = false;
				input.style.border = "1px solid #E9B425";
				error.style.display = "flex";
			}
		});

		if(!emailValid || !passValid || !valid){
			return;
		}else {
			redirectToHome();
		}
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
						<EmailInput />
						<PasswordInput />
						<div className={classNames({
							[styles.errorContainer]: true,
							"errorContainer": true
						})}>
							<p>Ops, usuário ou senha inválidos.</p>
							<p>Tente novamente!</p>
						</div>
						<div className={styles.buttonContainer}>
							<button 
								onClick={() => validateForm()}
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