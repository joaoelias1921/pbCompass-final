import styles from "./Footer.module.scss";
import Line from "assets/home/separation.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "common/context/User";
import { logout } from "firebase.js";

export default function Footer() {
	const [counter, setCounter] = useState<number>(60);
	const { setEmail, setPassword } = useContext(UserContext);
	const navigate = useNavigate();

	function countdown(time: number = 0) {
		setTimeout(() => {
			if(time > 0) {
				setCounter(time - 1);
				return countdown(time - 1);
			}else {
				clearContext(),
				logout(),
				navigate("/", {replace: true})
			}
		}, 1000);
	}

	useEffect(() => {
		countdown(counter);
	});

	//cleaning state on component unmount to prevent errors/warnings
	useEffect(() => {
		return () => {
		  setCounter(0); 
		};
	}, []);

	function clearContext() {
		setEmail("");
		setPassword("");
	}

	return (
		<footer className={styles.footer}>
			<section className={styles.counterSide}>
				<div className={styles.counterSide__textLeft}>
					<p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
				</div>
				<img src={Line} alt="Separation line" />
				<div className={styles.counterSide__textRight}>
					<p className={styles.appRefresh}>Application refresh in</p>
					<div className={styles.counterContainer}>
						<span>{counter}</span>
						<p>seconds</p>
					</div>
				</div>
			</section>
			<div className={styles.linkContainer}>
				<a 
					href="https://google.com" 
					target="_blank" 
					rel="noopener noreferrer"
				>
					<button className={styles.navButton}>
						Continuar Navegando
					</button>
				</a>
			</div>
			<div className={styles.logoutContainer}>
				<button 
					className={styles.logoutContainer__button}
					onClick={() => (
						clearContext(),
						logout(),
						navigate("/", {replace: true})
					)}
				>Logout
				</button>
			</div>
		</footer>
	);
}