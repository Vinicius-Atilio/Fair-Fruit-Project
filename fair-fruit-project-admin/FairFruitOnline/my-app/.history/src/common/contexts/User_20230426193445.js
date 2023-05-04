import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();
UserContext.displayName = 'SingUp';

export default function UserUpProvider({ children }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState();
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

    function registerUser(user) {
        setLogin(user.login = login)
        setPassword(user.password = password)
        }

        return {
            login,
            setLogin,
            password,
            setPassword,
            registerUser
        };
    }


