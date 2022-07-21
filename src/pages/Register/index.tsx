import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { RegisterContext } from "common/context/Register";
import classNames from "classnames";
import RegisterEmailInput from "components/Inputs/registerEmailInput";
import RegisterPasswordInput from "components/Inputs/registerPassInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "firebase.js";
import PassValidation from "./PassValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default function Register() {
    const navigate = useNavigate();
    const { 
        email,
        setEmail,
        password,
        setPassword,
        emailValid,
        setEmailValid,
        passValid,
        setPassValid,
        errorActive,
        setErrorActive,
    } = useContext(RegisterContext);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
    }, [user, loading]);

	function validateForm() {
		if(!emailValid || !passValid) {
			setErrorActive(true);
			return;
		}else{
			setErrorActive(false);
            setEmail("");
            setEmailValid(false);
            setPassword("");
            setPassValid(false);
			registerWithEmailAndPassword(email, password);
		}
	}

    //register user
    const registerWithEmailAndPassword = async (email: string, password: string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem("counter", "60");
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                authProvider: "local",
                email,
            });
        } catch (err: any) {
            setErrorActive(true);
        }
    };

    return (
        <>
            <div className={styles.registerContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.titleContainer__title}>Olá,</h3>
                    <p className={styles.titleContainer__text}>Ainda não possui uma conta? Cadastre-se agora, é gratuito!</p>
                </div>
                <div className={styles.registerForm}>
                    <h3 className={styles.registerForm__title}>Cadastro</h3>
                    <RegisterEmailInput />
                    <RegisterPasswordInput />
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
                        >Cadastrar
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