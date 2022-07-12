import Footer from "components/Footer";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<>
			<section>
				<div className={styles.sobreNos}>
					<div className={styles.sobreNos__texto}>
						<p>
							Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
						</p>
						<p>
							Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
						</p>
						<p>
							Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
						</p>
					</div>
				</div>
				<div className={styles.imagens}>
				</div>
			</section>
			<Footer />
		</>
	);
}