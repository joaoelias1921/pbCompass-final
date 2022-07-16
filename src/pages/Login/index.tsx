import styles from "./Login.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "common/context/User";
import classNames from "classnames";
import EmailInput from "components/Inputs/emailInput";
import PasswordInput from "components/Inputs/passwordInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "firebase.js";

export default function Login() {
	const navigate = useNavigate();
	const { email, password, emailValid, passValid } = useContext(UserContext);
	const [errorActive, setErrorActive] = useState(false);
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		if (loading) return;
		if (user) navigate("/home");
	}, [user, loading]);

	function validateForm() {
		let inputs = document.querySelectorAll("input");
		let valid = true;
		inputs.forEach(input => {
			if (input.value == "") {
				valid = false;
				input.style.border = "1px solid #E9B425";
				setErrorActive(true);
			}
		});

		if (!emailValid || !passValid || !valid) {
			return;
		}
	}

	return (
		<>
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
						[styles.errorContainer__active]: errorActive
					})}>
						<p>Ops, usuário ou senha inválidos.</p>
						<p>Tente novamente!</p>
					</div>
					<div className={styles.buttonContainer}>
						<button
							onClick={() => (validateForm(), logInWithEmailAndPassword(email, password))}
							className={styles.buttonContainer__button}
						>Continuar
						</button>
					</div>
					<div className={styles.registerAccount}>
						<p>Não possui uma conta? Cadastre-se <Link className={styles.registerLink} to="/register">aqui!</Link></p>
					</div>
				</div>
			</div>
		</>
	);
}