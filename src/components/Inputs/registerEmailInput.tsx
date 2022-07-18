import { RegisterContext } from "common/context/Register";
import { useContext, useEffect, useState } from "react";
import userIcon from "assets/login/user-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function LoginEmailInput() {
    const { 
        email, 
        setEmail, 
        setEmailValid, 
        errorActive, 
    } = useContext(RegisterContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

    useEffect(() => {
        if (!email.includes("@") || !email.includes(".com") || email == "") {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    }, [email]);

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
                        [styles["userFormInput--active"]]: inputActive,
                        [styles["formInput--invalid"]]: errorActive
                    })}
                    type="email"
                    placeholder="Usuário"
                    value={email}
                    onFocus={(event) => activateInput(event.target)}
                    onBlur={(event) => deactivateInput(event.target)}
                    onChange={(event) => (setEmail(event.target.value))}
                />
                <img
                    className={classNames({
                        [styles.userIcon]: true,
                        [styles.inactiveIcon]: iconInactive
                    })}
                    src={userIcon}
                    alt="User Icon"
                />
            </div>
        </>
    )
}