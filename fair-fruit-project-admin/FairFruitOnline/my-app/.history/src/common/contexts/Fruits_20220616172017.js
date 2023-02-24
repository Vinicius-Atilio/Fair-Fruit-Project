import { createContext, useContext, useEffect, useState } from 'react';

const FruitsContext = createContext();
FruitsContext.displayName = 'Shopping';

export default function FruitsProvider({ children }) {
    const [shopping, setShopping] = useState([]);
    const [fruitsList, setFruitsList] = useState(0);
    return (
        <FruitsContext.Provider
            value={{
                shopping,
                setShopping,
                fruitsList,
                setFruitsList,
            }}
        >
            {children}
        </FruitsContext.Provider>
    );
}

export function useFruitsContext() {
    const { shopping, setShopping } = useContext(FruitsContext);

    function addFruit(newFruit) {
        const hasFruit = shopping.some((item) => item.id === newFruit.id);
        let newShopping = [...shopping];
        if (!hasFruit) {
            newShopping.push(newFruit);
            return setShopping(newShopping);
        }
    }

    return {
        shopping,
        addFruit,
    };
}
