import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const AuthContext = createContext();
AuthContext.displayName = 'SingUp';

export default function LoginProvider({ children }) {
    const [userlogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <AuthContext.Provider
            value={{
                userlogin,
                setUserLogin,
                userPassword,
                setUserPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

