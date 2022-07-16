import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "User";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passValid, setPassValid] = useState(false);
    const [errorActive, setErrorActive] = useState(false);
    const [minCharValid, setMinCharValid] = useState(false);
    const [upperCaseValid, setUpperCaseValid] = useState(false);
    const [lowerCaseValid, setLowerCaseValid] = useState(false);
    const [numberValid, setNumberValid] = useState(false);
    return (
        <UserContext.Provider value={ {
            email, 
            setEmail, 
            emailValid,
            setEmailValid,
            password, 
            setPassword,
            passValid,
            setPassValid,
            errorActive, 
            setErrorActive,
            minCharValid, 
            setMinCharValid,
            upperCaseValid, 
            setUpperCaseValid,
            lowerCaseValid, 
            setLowerCaseValid,
            numberValid,
            setNumberValid
        }}>
            {children}
        </UserContext.Provider>
    )
}