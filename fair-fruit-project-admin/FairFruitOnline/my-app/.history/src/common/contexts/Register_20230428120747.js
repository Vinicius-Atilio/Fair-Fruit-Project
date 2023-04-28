import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const RegisterContext = createContext();
RegisterContext.displayName = 'Register';

export default function RegisterProvider({ children }) {
    const [userName, setUserName] = useState('');
    const [userDoc, setUserDoc] = useState('');
    const [userBirthDate, setUserBirthDate] = useState('');
    const [userType, setUserType] = useState(Boolean);
    const [userEmail, setUserEmail] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userBalance, setUserBalance] = useState(0);

    return (
        <RegisterContext.Provider
            value={{
                userLogin,
                setUserLogin,
                userPassword,
                setUserPassword
            }}
        >
            {children}
        </RegisterContext.Provider>
    );
}

