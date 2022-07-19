import styles from "./HomeHeader.module.scss";
import Logo from "assets/home/compass-logo-dark.png";
import Time from "./Time";
import Weather from "./Weather";

export default function HomeHeader() {
	return (
		<header className={styles.topContainer}>
			<div className={styles.topContainer__logo}>
				<img src={Logo} alt="Compass Logo" />
			</div>
			<div className={styles.topContainer__time}>
				<Time />
			</div>
			<div className={styles.topContainer__weather}>
				<Weather />
			</div>
		</header>
	);
}