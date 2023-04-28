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

    async function userAuth(user)  {
        try {
            const res = await apiService.auth('/api/users/auth', user)
            console.log(res);
            console.log(res.data);
            if (res){
                localStorage.setItem("user", (res.data));
            }

        } catch (error){
            console.log(error);
        }
    }

        return {
            login,
            setLogin,
            password,
            setPassword,
            userAuth
        };
    }


