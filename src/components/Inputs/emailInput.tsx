import { UserContext } from "common/context/User";
import { useContext, useState } from "react";
import userIcon from "assets/login/user-icon.png";
import styles from "./Input.module.scss";
import classNames from "classnames";

export default function EmailInput() {
    const { email, setEmail, setEmailValid } = useContext(UserContext);
    const [inputActive, setInputActive] = useState(false);
    const [iconInactive, setIconInactive] = useState(false);

    function validateEmail(email: HTMLInputElement) {
		let error = document.querySelector(".errorContainer")! as HTMLDivElement;

		if(!email.value.includes("@") || !email.value.includes(".com")){
			email.style.border = "1px solid #E9B425";
			error.style.display = "flex";
			setEmailValid(false);
		}else {
			email.style.border = "";
			error.style.display = "none";
			setEmailValid(true);
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
                        [styles["userFormInput--active"]]: inputActive
                    })}
                    type="email"
                    placeholder="Usuário"
                    value={email}
                    onFocus={(event) => activateInput(event.target)}
                    onBlur={(event) => deactivateInput(event.target)}
                    onChange={(event) => (
                        setEmail(event.target.value),
                        validateEmail(event.target)
                    )}
                />
                <img
                    className={classNames({
                        ["userIcon"]: true,
                        [styles.inactiveIcon]: iconInactive
                    })} 
                    src={userIcon} 
                    alt="User Icon" 
                />
            </div>
        </>
    )
}