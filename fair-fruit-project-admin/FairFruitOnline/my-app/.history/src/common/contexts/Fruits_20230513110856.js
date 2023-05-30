import { createContext, useContext, useState } from 'react';
import configAxios from "utils/config";

const FruitsContext = createContext();
FruitsContext.displayName = 'Shopping';

export default function FruitsProvider({ children }) {
    const [fruit, setFruit] = useState([]);
    const [fruitsList, setFruitsList] = useState(0);
    const [addedProducts, setAddedProducts] = useState([]);
    return (
        <FruitsContext.Provider
            value={{
                fruit,
                setFruit,
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
    const { setFruit } = useContext(FruitsContext);

    async function addFruit(newFruit = {}) {
        if (newFruit != null) {
            try {
                const response = await configAxios.post('/api/products', newFruit);
                setFruit([...newFruit, response]);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function deleteFruit(productId) {

    }

    return {
        addFruit,
        deleteFruit
    };
}