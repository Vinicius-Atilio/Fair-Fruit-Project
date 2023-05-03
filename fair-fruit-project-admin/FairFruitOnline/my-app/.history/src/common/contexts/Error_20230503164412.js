import { createContext, useState } from 'react';

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

