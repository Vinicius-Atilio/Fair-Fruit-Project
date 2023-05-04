import { createContext, useState, useContext } from 'react';

export const SignUpContext = createContext();
SignUpContext.displaylogin = 'User';

export default function SignUpProvider({ children }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState();
    return (
        <SignUpContext.Provider
            value={{
                login,
                setLogin,
                password,
                setPassword
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
}

export function useSingUpContext() {
    const { login, setLogin, password, setPassword} = useContext(SignUpContext);

    function registerUser(user) {
        setLogin(user.login = login)
        setPassword(user.password = password)
        }

        return {
            registerUser
        };
    }


