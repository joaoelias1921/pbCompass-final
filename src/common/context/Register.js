import { createContext, useState } from 'react';

export const RegisterContext = createContext();
RegisterContext.displayName = "Registration";

export const RegisterProvider = ({ children }) => {
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
        <RegisterContext.Provider value={ {
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
        </RegisterContext.Provider>
    )
}