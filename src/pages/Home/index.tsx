import Footer from "components/Footer";
import HomeHeader from "components/HomeHeader";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { useEffect } from "react";
import { auth } from "firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import texts from "data/homeText.json";

export default function Home() {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

    useEffect(() => {
		if(loading) return;
		if(!user) {
			alert("Você deve fazer login para acessar esta página!");
			navigate("/");
		}
    }, [user, loading]);

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