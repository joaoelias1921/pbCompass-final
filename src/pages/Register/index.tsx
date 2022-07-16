import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "common/context/User";
import classNames from "classnames";
import EmailInput from "components/Inputs/emailInput";
import PasswordInput from "components/Inputs/passwordInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "firebase.js";

export default function Register() {
    const navigate = useNavigate();
    const { email, password, emailValid, passValid } = useContext(UserContext);
    const [errorActive, setErrorActive] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const register = () => {
        if (!email) alert("Please enter an email");
        registerWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
    }, [user, loading]);

    function validateForm() {
        let inputs = document.querySelectorAll("input");
        let valid = true;
        inputs.forEach(input => {
            if (input.value == "") {
                valid = false;
                input.style.border = "1px solid #E9B425";
                setErrorActive(true);
            }
        });

        if (!emailValid || !passValid || !valid) {
            return;
        }
    }

    return (
        <>
            <div className={styles.registerContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.titleContainer__title}>Olá,</h3>
                    <p className={styles.titleContainer__text}>Ainda não possui uma conta? Cadastre-se agora, é gratuito!</p>
                </div>
                <div className={styles.registerForm}>
                    <h3 className={styles.registerForm__title}>Cadastro</h3>
                    <EmailInput />
                    <PasswordInput />
                    <div className={classNames({
                        [styles.errorContainer]: true,
                        [styles.errorContainer__active]: errorActive
                    })}>
                        <p>Ops, usuário ou senha inválidos.</p>
                        <p>Tente novamente!</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={() => (validateForm(), register())}
                            className={styles.buttonContainer__button}
                        >Continuar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}