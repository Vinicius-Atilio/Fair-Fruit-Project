import { createContext, useState } from 'react';

export const ErrorContext = createContext();
ErrorContext.displayName = 'Error';

export default function ErrorProvider({ children }) {
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

