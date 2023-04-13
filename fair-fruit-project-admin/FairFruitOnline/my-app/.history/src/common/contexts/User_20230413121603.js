import { createContext, useState } from 'react';

export const SignUpContext = createContext();
SignUpContext.displaylogin = 'User';

export default function SignUpProvider({ children }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <SignUpContext.Provider
            value={{
                login,
                setLogin,
                password,
                setPassword,
                isAdmin,
                setIsAdmin,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
}
