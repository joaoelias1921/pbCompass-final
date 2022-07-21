import styles from "./Login.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserLoginContext } from "common/context/UserLogin";
import classNames from "classnames";
import LoginEmailInput from "components/Inputs/loginEmailInput";
import LoginPassInput from "components/Inputs/loginPassInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
	const navigate = useNavigate();
	const { 
		email,
		setEmail,
		password,
		setPassword,
		passValid,
		setPassValid,
		emailValid,
		setEmailValid,
		errorActive, 
		setErrorActive
	} = useContext(UserLoginContext);
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		if (loading) return;
		if (user) navigate("/home");
	}, [user, loading]);

	function validateForm() {
		if(!emailValid || !passValid) {
			setErrorActive(true);
			return;
		}else{
			setErrorActive(false);			
			logInWithEmailAndPassword(email, password);
		}
	}

	//email and password login
	const logInWithEmailAndPassword = async (email: string, password: string) => {
		try {			
			await signInWithEmailAndPassword(auth, email, password);
			localStorage.setItem("counter", "60");
		} catch (err: any) {
			setErrorActive(true);
			console.log(err.message);
		}
	};

	function clearContext() {
		setEmail("");
		setPassword("");
		setEmailValid(false);
		setPassValid(false);
		setErrorActive(false);
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
					<LoginEmailInput />
					<LoginPassInput />
					<div className={classNames({
						[styles.errorContainer]: true,
						[styles.errorContainer__active]: errorActive
					})}>
						<p>Ops, usuário ou senha inválidos.</p>
						<p>Tente novamente!</p>
					</div>
					<div className={styles.buttonContainer}>
						<button
							onClick={() => (validateForm())}
							className={styles.buttonContainer__button}
						>Continuar
						</button>
					</div>
					<div className={styles.registerAccount}>
						<p>Não possui uma conta? Cadastre-se <Link onClick={clearContext} className={styles.registerLink} to="/register">aqui!</Link></p>
					</div>
				</div>
			</div>
		</>
	);
}