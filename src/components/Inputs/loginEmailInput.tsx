import { UserLoginContext } from "common/context/UserLogin";
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
    } = useContext(UserLoginContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);
    const regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    useEffect(() => {
        regex.test(email.toLowerCase()) ? setEmailValid(true) : setEmailValid(false);
    }, [email]);

    function activateInput(input: EventTarget) {
        setIconInactive(true);
        setInputActive(true);
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
                    onInput={(event) => activateInput(event.target)}
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