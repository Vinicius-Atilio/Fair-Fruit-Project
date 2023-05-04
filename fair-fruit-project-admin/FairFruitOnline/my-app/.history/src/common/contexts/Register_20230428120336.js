import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const LoginContext = createContext();
LoginContext.displayName = 'Login';

export default function LoginProvider({ children }) {
    const [userlogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <LoginContext.Provider
            value={{
                userlogin,
                setUserLogin,
                userPassword,
                setUserPassword
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

