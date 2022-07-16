import styles from "./PassValidation.module.scss";
import { MdOutlineErrorOutline as Invalid } from "react-icons/md";
import { AiOutlineCheck as Valid } from "react-icons/ai";
import classNames from "classnames";
import { useContext } from "react";
import { UserContext } from "common/context/User";

export default function PassValidation() {
    const { 
        minCharValid, 
        upperCaseValid, 
        lowerCaseValid,
        numberValid
    } = useContext(UserContext);

    return (
        <>
            <div className={styles.checksContainer}>
                <h3>Sua senha deve possuir:</h3>
                <div className={styles.checkRow}>
                    <p>Mínimo de 6 caracteres</p>
                    <div className={styles.iconContainer}>
                        <Invalid color="lightcoral" className={classNames({
                            [styles.invisible]: minCharValid,
                            [styles.validityIcon]: true
                        })} />
                        <Valid color="lightgreen" className={classNames({
                            [styles.invisible]: !minCharValid,
                            [styles.validityIcon]: true
                        })} />
                    </div>
                </div>
                <div className={styles.checkRow}>
                    <p>Pelo menos uma letra maiúscula</p>
                    <div className={styles.iconContainer}>
                        <Invalid color="lightcoral" className={classNames({
                            [styles.invisible]: upperCaseValid,
                            [styles.validityIcon]: true
                        })} />
                        <Valid color="lightgreen" className={classNames({
                            [styles.invisible]: !upperCaseValid,
                            [styles.validityIcon]: true
                        })} />
                    </div>
                </div>
                <div className={styles.checkRow}>
                    <p>Pelo menos uma letra minúscula</p>
                    <div className={styles.iconContainer}>
                        <Invalid color="lightcoral" className={classNames({
                            [styles.invisible]: lowerCaseValid,
                            [styles.validityIcon]: true
                        })} />
                        <Valid color="lightgreen" className={classNames({
                            [styles.invisible]: !lowerCaseValid,
                            [styles.validityIcon]: true
                        })} />
                    </div>
                </div>
                <div className={styles.checkRow}>
                    <p>Pelo menos um número</p>
                    <div className={styles.iconContainer}>
                        <Invalid color="lightcoral" className={classNames({
                            [styles.invisible]: numberValid,
                            [styles.validityIcon]: true
                        })} />
                        <Valid color="lightgreen" className={classNames({
                            [styles.invisible]: !numberValid,
                            [styles.validityIcon]: true
                        })} />
                    </div>
                </div>
            </div>
        </>
    );
}