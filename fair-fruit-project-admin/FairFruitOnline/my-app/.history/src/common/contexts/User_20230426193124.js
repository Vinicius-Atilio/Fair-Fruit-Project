import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();
UserContext.displayName = 'SingUp';

export default function UserProvider({ children }) {
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


