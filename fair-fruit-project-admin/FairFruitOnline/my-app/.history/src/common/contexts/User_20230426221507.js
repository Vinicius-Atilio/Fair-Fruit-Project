import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const UserContext = createContext();
UserContext.displayName = 'SingUp';

export default function UserUpProvider({ children }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState();
    const [token, setToken] = useState();
    return (
        <UserContext.Provider
            value={{
                login,
                setLogin,
                password,
                setPassword
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useSingUpContext() {
    const { login, setLogin, password, setPassword} = useContext(UserContext);

    function userAtuh(user)  {
        try {
            const res = apiService.auth('/api/users/auth', user)
            console.log(res);
            if (res){
                setLogin(res.data.login = login)
                setPassword(res.data.password = password)
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
            userAtuh
        };
    }


