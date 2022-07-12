import Footer from "components/Footer";
import HomeHeader from "components/HomeHeader";
import styles from "./Home.module.scss";
import LargeLogo from "assets/home/compasslogo-large.png";
import classNames from "classnames";

export default function Home() {
	const texts = [{
		en: "Our mission is",
		pt: "Nossa missão é",
		small: true
	}, {
		en: "to transform the world",
		pt: "transformar o mundo"
	}, {
		en: "building digital experiences",
		pt: "construindo experiências digitais"
	}, {
		en: "that enable our client's growth",
		pt: "que permitam o crescimento dos nossos clientes"
	}];
	return (
		<main className={styles.mainContainer}>
			<HomeHeader />
			<section className={styles.mainContent}>
				<section className={styles.largeBgContainer}>
					<img src={LargeLogo} alt="Large Compass Logo" />
				</section>
				<section className={styles.textsContainer}>
					{texts.map(text => (
						<div className={styles.textsContainer__textBox}>
							<span className={classNames({
								[styles.textsContainer__engText]: true,
								[styles[`textsContainer__engText--small`]]: text.small
							})}>{text.en}</span>
							<span className={styles.textsContainer__ptText}>{text.pt}</span>
						</div>
					))}
				</section>
			</section>
			<Footer />
		</main>
	);
}