import styles from "./Weather.module.scss";
import Cloudy from "assets/home/cloudy.png";
import { useEffect, useState } from "react";

export default function Weather() {
    const [degrees, setDegrees] = useState<number>(0);
    const [city, setCity] = useState("");
    
    function fetchWeather() {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;        

            fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=bf0de12f9df4e3c21f2fb18a7606c041`)
            .then(res => res.json())
            .then(result => {
                const { main, name } = result;
                setCity(`${name} - SC`)
                setDegrees(Math.round(main.temp));
            });
        });
    }

    return(
        <>
            <div onLoad={() => fetchWeather()} className={styles.weatherContainer}>
                <span className={styles.weatherContainer__location}>{city}</span>
                <div className={styles.weatherContainer__weather}>
                    <img src={Cloudy} alt="Cloudy icon" />
                    <span>{degrees}º</span>
                </div>                
            </div>
        </>
    );
}