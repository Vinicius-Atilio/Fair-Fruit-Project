import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();
ProductContext.displayName = 'AddProduct';

export default function ProductProvider({ children }) {
    const [addedProducts, setAddedProducts] = useState([]);

    return (
        <ProductContext.Provider
            value={{
                addedProducts,
                setAddedProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    const {
        addedProducts,
        setAddedProducts,
    } = useContext(ProductContext);

    useEffect(() => {
    }, );

    return {
        addedProducts,
        setAddedProducts,
    };
}
