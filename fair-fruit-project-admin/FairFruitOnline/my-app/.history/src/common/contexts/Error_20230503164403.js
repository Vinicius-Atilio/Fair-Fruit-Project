import { createContext, useState, useContext } from 'react';
import apiService from 'service/apiService';

export const ErrorContext = createContext();
ErrorContext.displayName = 'Error';

export default function LoginProvider({ children }) {
    const [error, setError] = useState('');

    return (
        <ErrorContext.Provider
            value={{
                error,
                setError
            }}
        >
            {children}
        </ErrorContext.Provider>
    );
}

