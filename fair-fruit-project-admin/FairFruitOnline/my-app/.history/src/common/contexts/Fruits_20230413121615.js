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

export function useFruitsContext() {
    const { shopping, setShopping, addedProducts, setAddedProducts } = useContext(FruitsContext);

    function addFruit(newFruit) {
        const hasFruit = shopping.some((item) => item.id === newFruit.id);
        let newShopping = [...shopping];
        if (!hasFruit) {
            newShopping.push(newFruit);
            setShopping(newShopping);
            setAddedProducts(prevAddedProducts => [...prevAddedProducts, newFruit]);
        }
    }

    return {
        shopping,
        addFruit,
        addedProducts,
        setAddedProducts,
    };
}