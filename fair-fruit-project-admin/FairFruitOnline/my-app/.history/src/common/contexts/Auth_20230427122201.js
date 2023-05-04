import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const AuthContext = createContext();
AuthContext.displayName = 'SingUp';

export default function UserUpProvider({ children }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthContext.Provider
            value={{
                login,
                setLogin,
                password,
                setPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const { login, setLogin, password, setPassword} = useContext(AuthContext);



        return {
            login,
            setLogin,
            password,
            setPassword
        };
    }


