import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "common/context/User";
import classNames from "classnames";
import EmailInput from "components/Inputs/emailInput";
import PasswordInput from "components/Inputs/passwordInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "firebase.js";
import PassValidation from "./PassValidation";

export default function Register() {
    const navigate = useNavigate();
    const { 
        email, 
        password, 
        emailValid,
        passValid,
        errorActive,
        setErrorActive,
    } = useContext(UserContext);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
    }, [user, loading]);

	function validateForm() {
        if(!emailValid || !passValid){
            setErrorActive(true);
            return;
        }else{
            setErrorActive(false);
			registerWithEmailAndPassword(email, password);
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
                    <PassValidation />
                    <div className={classNames({
                        [styles.errorContainer]: true,
                        [styles.errorContainer__active]: errorActive
                    })}>
                        <p>Ops, usuário ou senha inválidos.</p>
                        <p>Tente novamente!</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={() => (validateForm())}
                            className={styles.buttonContainer__button}
                        >Continuar
                        </button>
                    </div>
                    <div className={styles.loginAccount}>
						<p>Já possui uma conta? Efetue <Link className={styles.loginLink} to="/login">login!</Link></p>
					</div>
                </div>
            </div>
        </>
    );
}