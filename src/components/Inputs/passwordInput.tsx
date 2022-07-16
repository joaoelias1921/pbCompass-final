import { UserContext } from "common/context/User";
import { useContext, useEffect, useState } from "react";
import passIcon from "assets/login/pass-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function PasswordInput() {
    const { 
        password, 
        setPassword, 
        passValid,
        setPassValid,
        minCharValid, 
        upperCaseValid, 
        lowerCaseValid, 
        numberValid,
        setMinCharValid,
        setUpperCaseValid,
        setLowerCaseValid,
        setNumberValid
    } = useContext(UserContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

    useEffect(() => {
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;

        password.length < 6 ? setMinCharValid(false) : setMinCharValid(true);
        upperCaseRegex.test(password) ? setUpperCaseValid(true) : setUpperCaseValid(false);
        lowerCaseRegex.test(password) ? setLowerCaseValid(true) : setLowerCaseValid(false);
        numberRegex.test(password) ? setNumberValid(true) : setNumberValid(false);
    }, [password])

    function validatePassword() {
        //checks if all values are "true"
        const validations = [minCharValid, upperCaseValid, lowerCaseValid, numberValid];
        validations.every(validation => validation) ? setPassValid(true) : setPassValid(false);
    }

    function activateInput(input: HTMLInputElement) {
        setIconInactive(true);
        setInputActive(true);
    }

    function deactivateInput(input: HTMLInputElement) {
        setIconInactive(false);
        setInputActive(false);
    }

    return (
        <>
            <div className={styles.inputContainer}>
                <input
                    className={classNames({
                        [styles.formInput]: true,
                        [styles["passFormInput--active"]]: inputActive,
                        [styles["formInput--invalid"]]: !passValid
                    })}
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onFocus={(event) => activateInput(event.target)}
                    onBlur={(event) => (
                        deactivateInput(event.target),
                        validatePassword()
                    )}
                    onChange={(event) => (setPassword(event.target.value))}
                />
                <img 
                    className={classNames({
                        [styles.passIcon]: true,
                        [styles.inactiveIcon]: iconInactive
                    })}
                    src={passIcon} 
                    alt="Password Icon" 
                />
            </div>
        </>
    );
}