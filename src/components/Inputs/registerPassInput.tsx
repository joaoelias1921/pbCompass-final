import { RegisterContext } from "common/context/Register";
import { useContext, useEffect, useState } from "react";
import passIcon from "assets/login/pass-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function RegisterPassInput() {
    const { 
        password, 
        setPassword, 
        setPassValid,
        minCharValid, 
        upperCaseValid, 
        lowerCaseValid, 
        numberValid,
        setMinCharValid,
        setUpperCaseValid,
        setLowerCaseValid,
        setNumberValid,
        errorActive
    } = useContext(RegisterContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);    
    const validations = [minCharValid, upperCaseValid, lowerCaseValid, numberValid];

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
        validations.every(allTrue) ? setPassValid(true) : setPassValid(false);
    }

    function allTrue(validation: boolean) {
        return validation == true;
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
                        [styles["formInput--invalid"]]: errorActive
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