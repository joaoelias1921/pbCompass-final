import { UserContext } from "common/context/User";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import styles from "./Input.module.scss";

export default function EmailInput() {
    const { email, setEmail, setEmailValid } = useContext(UserContext);

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

    return (
        <>
            <div className={styles.inputContainer}>
                <input
                    type="email"
                    placeholder="Usuário"
                    value={email}
                    onChange={(event) => (
                        setEmail(event.target.value),
                        validateEmail(event.target)
                    )}
                />
                <AiOutlineUser size={25} />
            </div>
        </>
    )
}