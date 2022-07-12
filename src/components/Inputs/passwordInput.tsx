import { UserContext } from "common/context/User";
import { useContext } from "react";
import { BiLock } from "react-icons/bi";
import styles from "./Input.module.scss";

export default function PasswordInput() {
    const { password, setPassword, setPassValid } = useContext(UserContext);

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

    return (
        <>
            <div className={styles.inputContainer}>
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(event) => (
                        setPassword(event.target.value),
                        validatePassword(event.target)
                    )}
                />
                <BiLock size={25} />
            </div>
        </>
    );
}