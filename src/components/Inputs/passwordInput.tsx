import { UserContext } from "common/context/User";
import { useContext, useState } from "react";
import passIcon from "assets/login/pass-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function PasswordInput() {
    const { password, setPassword, setPassValid } = useContext(UserContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

    function validatePassword(password: HTMLInputElement) {
        let error = document.querySelector(".errorContainer")! as HTMLDivElement;

        if (password.value.length < 3) {
            password.style.border = "1px solid #E9B425";
            error.style.display = "flex";
            setPassValid(false);
        } else {
            password.style.border = "";
            error.style.display = "none";
            setPassValid(true);
        }
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
                        [styles["passFormInput--active"]]: inputActive
                    })}
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onFocus={(event) => activateInput(event.target)}
                    onBlur={(event) => deactivateInput(event.target)}
                    onChange={(event) => (
                        setPassword(event.target.value),
                        validatePassword(event.target)
                    )}
                />
                <img 
                    className={classNames({
                        ["passIcon"]: true,
                        [styles.inactiveIcon]: iconInactive
                    })}
                    src={passIcon} 
                    alt="Password Icon" 
                />
            </div>
        </>
    );
}