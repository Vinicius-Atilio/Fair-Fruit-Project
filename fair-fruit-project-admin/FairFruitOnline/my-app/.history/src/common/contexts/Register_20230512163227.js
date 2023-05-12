import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const UserContext = createContext();
UserContext.displayName = 'Register';

export default function RegisterProvider({ children }) {
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userDoc, setUserDoc] = useState('');
    const [userBirthDate, setUserBirthDate] = useState('');
    const [userType, setUserType] = useState(Boolean);
    const [userEmail, setUserEmail] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userBalance, setUserBalance] = useState(0);

    return (
        <UserContext.Provider
            value={{
                userId,
                setUserId,
                userName,
                setUserName,
                userDoc,
                setUserDoc,
                userBirthDate,
                setUserBirthDate,
                userType,
                setUserType,
                userEmail,
                setUserEmail,
                userLogin,
                setUserLogin,
                userPassword,
                setUserPassword,
                userBalance,
                setUserBalance,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

