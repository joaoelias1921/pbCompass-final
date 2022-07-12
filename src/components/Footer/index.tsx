import styles from "./Footer.module.scss";
import Line from "assets/home/separation.png";

export default function Footer() {
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
						<span>600</span>
						<p>seconds</p>
					</div>
				</div>
			</section>
			<div className={styles.linkContainer}>
				<p className={styles.linkContainer__text}>Continuar Navegando</p>
			</div>
			<div className={styles.logoutContainer}>
				<p className={styles.logoutContainer__text}>Logout</p>
			</div>
		</footer>
	);
}