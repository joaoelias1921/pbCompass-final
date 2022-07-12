import styles from "./Weather.module.scss";
import Cloudy from "assets/home/cloudy.png";

export default function Weather() {
    return(
        <>
            <div className={styles.weatherContainer}>
                <span className={styles.weatherContainer__location}>Passo Fundo - RS</span>
                <div className={styles.weatherContainer__weather}>
                    <img src={Cloudy} alt="Cloudy icon" />
                    <span>22º</span>
                </div>                
            </div>
        </>
    );
}