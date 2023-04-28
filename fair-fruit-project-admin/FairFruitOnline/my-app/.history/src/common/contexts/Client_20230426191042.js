import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();
UserContext.displayName = 'User';

export default function UserProvider({ children }) {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);
    return (
        <UserContext.Provider
            value={{
                name,
                setName,
                balance,
                setBalance,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useSingUpContext() {
    // const { login, setLogin, password, setPassword} = useContext(UserContext);

    // function registerUser(user) {
    //     setLogin(user.login = login)
    //     setPassword(user.password = password)
    //     }

    //     return {
    //         login,
    //         setLogin,
    //         password,
    //         setPassword,
    //         registerUser
    //     };
    }
