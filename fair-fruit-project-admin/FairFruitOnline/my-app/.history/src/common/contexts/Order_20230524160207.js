import { createContext, useContext, useEffect, useState } from 'react';
import { usePayment } from './Payment';
import { UserContext } from 'common/contexts/Register';
import configAxios from 'utils/config';

const OrderContext = createContext();
OrderContext.displayName = 'Order';

export default function OrderProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    return (
        <OrderContext.Provider
            value={{
                cart,
                setCart,
                quantityCart,
                setQuantityCart,
                totalValue,
                setTotalValue,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}