import { createContext, useContext, useState } from 'react';

const FruitsContext = createContext();
FruitsContext.displayName = 'Shopping';

export default function FruitsProvider({ children }) {
    const [shopping, setShopping] = useState([]);
    const [fruitsList, setFruitsList] = useState(0);
    const [addedProducts, setAddedProducts] = useState([]);
    return (
        <FruitsContext.Provider
            value={{
                shopping,
                setShopping,
                fruitsList,
                setFruitsList,
                addedProducts,
                setAddedProducts,
            }}
        >
            {children}
        </FruitsContext.Provider>
    );
}