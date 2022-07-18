import { createContext, useState } from 'react';

export const UserLoginContext = createContext();
UserLoginContext.displayName = "UserLogin";

export const UserLoginProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passValid, setPassValid] = useState(true);
    const [errorActive, setErrorActive] = useState(false);
    return (
        <UserLoginContext.Provider value={ {
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
        }}>
            {children}
        </UserLoginContext.Provider>
    )
}