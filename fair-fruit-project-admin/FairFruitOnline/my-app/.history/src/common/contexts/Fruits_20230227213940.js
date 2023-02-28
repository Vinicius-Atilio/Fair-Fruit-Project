import { createContext, useContext, useState } from 'react';

const FruitsContext = createContext();

export default function FruitsProvider({ children }) {
  const [shopping, setShopping] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);

  function addFruit(newFruit) {
    const hasFruit = shopping.some((item) => item.id === newFruit.id);
    if (!hasFruit) {
      setShopping(prevShopping => [...prevShopping, newFruit]);
      setAddedProducts(prevAddedProducts => [...prevAddedProducts, newFruit]);
    }
  }

  return (
    <FruitsContext.Provider value={{ shopping, addFruit, addedProducts }}>
      {children}
    </FruitsContext.Provider>
  );
}

export function useFruitsContext() {
  const { shopping, addFruit, addedProducts } = useContext(FruitsContext);

  return { shopping, addFruit, addedProducts };
}
