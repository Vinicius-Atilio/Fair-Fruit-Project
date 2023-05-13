import { createContext, useContext, useState } from 'react';
import configAxios from "utils/config";

const FruitsContext = createContext();
FruitsContext.displayName = 'Shopping';

export default function FruitsProvider({ children }) {
    const [fruit, setFruit] = useState([]);
    const [updatedFruitList, setUpdatedFruitList] = useState([]);
    const [addedProducts, setAddedProducts] = useState([]);
    return (
        <FruitsContext.Provider
            value={{
                fruit,
                setFruit,
                updatedFruitList,
                setUpdatedFruitList,
                addedProducts,
                setAddedProducts,
            }}
        >
            {children}
        </FruitsContext.Provider>
    );
}

export function useFruitsContext() {
    const { fruit, setFruit, updatedFruitList, setUpdatedFruitList } = useContext(FruitsContext);

    async function products() {
        try {
            const data = await configAxios.get("/api/products");
            setFruit(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function addFruit(newFruit = {}) {
        console.log(newFruit);
        if (newFruit != null) {
            try {
                const response = await configAxios.post('/api/products', newFruit);
                console.log(response);
                setFruit([...fruit, response]);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function deleteFruit(productId) {
        try {
            await configAxios.del(`/api/products/${productId}`);
            const updated = fruit.filter((product) => product.id !== productId);
            setUpdatedFruitList(updated);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fruit,
        setFruit,
        updatedFruitList,
        products,
        addFruit,
        deleteFruit
    };
}