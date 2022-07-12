import { useState } from "react";
import styles from "./Time.module.scss";

export default function Time() {
    const date = new Date();
    return(
        <>
            <div className={styles.timeContainer}>
                <span className={styles.timeContainer__number}>{date.getHours()}</span>
                <span className={styles.timeContainer__division}>:</span>
                <span className={styles.timeContainer__number}>{
                    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
                }</span>
            </div>
            <div className={styles.timeTextContainer}>
                <span className={styles.timeTextContainer__text}>
                    {
                        `${date.toLocaleDateString(
                                'pt-br', { weekday:"long", month:"long", day:"numeric"}
                            )
                        } 
                        de ${date.getFullYear()}`
                    }
                </span>
            </div>
        </>
    );
}