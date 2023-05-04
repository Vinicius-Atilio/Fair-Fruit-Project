import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const LoginContext = createContext();
LoginContext.displayName = 'Login';

export default function LoginProvider({ children }) {
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <LoginContext.Provider
            value={{
                userLogin,
                setUserLogin,
                userPassword,
                setUserPassword
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

