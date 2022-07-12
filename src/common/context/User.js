import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "User";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passValid, setPassValid] = useState(true);
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
        }}>
            {children}
        </UserContext.Provider>
    )
}