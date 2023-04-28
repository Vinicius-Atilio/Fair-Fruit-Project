import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const RegisterContext = createContext();
RegisterContext.displayName = 'Register';

export default function RegisterProvider({ children }) {
    const [userlogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <RegisterContext.Provider
            value={{
                userlogin,
                setUserLogin,
                userPassword,
                setUserPassword
            }}
        >
            {children}
        </RegisterContext.Provider>
    );
}

