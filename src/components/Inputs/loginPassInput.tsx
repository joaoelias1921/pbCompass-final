import { UserLoginContext } from "common/context/UserLogin";
import { useContext, useEffect, useState } from "react";
import passIcon from "assets/login/pass-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function LoginPassInput() {
    const { 
        password, 
        setPassword, 
        setPassValid,
        errorActive,
    } = useContext(UserLoginContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

    useEffect(() => {
        password.length < 6 ? setPassValid(false) : setPassValid(true);
    }, [password]);

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
                        [styles["passFormInput--active"]]: inputActive,
                        [styles["formInput--invalid"]]: errorActive
                    })}
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onInput={(event) => activateInput(event.target)}
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