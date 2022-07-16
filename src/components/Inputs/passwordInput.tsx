import { UserContext } from "common/context/User";
import { useContext, useEffect, useRef, useState } from "react";
import passIcon from "assets/login/pass-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function PasswordInput() {
    const { password, setPassword, passValid, setPassValid, setErrorActive } = useContext(UserContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (password.length < 6) {
                setErrorActive(true);
                setPassValid(false);
            } else {
                setErrorActive(false);
                setPassValid(true);
            }
        }
    }, [password]);

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
                    onBlur={(event) => deactivateInput(event.target)}
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