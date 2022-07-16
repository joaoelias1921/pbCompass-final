import Footer from "components/Footer";
import HomeHeader from "components/HomeHeader";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { useEffect } from "react";
import { auth } from "firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

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

    useEffect(() => {
        if(!user) {
			alert("Você deve fazer login para acessar esta pagina!");
			navigate("/");
		}
    }, [user]);

	return (
		<section className={styles.mainContainer}>
			<HomeHeader />
			<section className={styles.mainContent}>
				<section className={styles.largeBgContainer}></section>
				<section className={styles.textsContainer}>
					{texts.map((text, index) => (
						<div key={index} className={styles.textsContainer__textBox}>
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
		</section>
	);
}