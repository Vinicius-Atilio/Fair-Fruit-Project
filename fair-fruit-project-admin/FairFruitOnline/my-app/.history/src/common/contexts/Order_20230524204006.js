import { createContext, useState, useContext } from 'react';
import configAxios from "utils/config";

const OrderContext = createContext();
OrderContext.displayName = 'Order';

export default function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);
    const [code, setCode] = useState(0);
    const [total, setTotal] = useState(0);
    const [orderData, setOrderData] = useState('');
    const [status, setStatus] = useState('');
    const [items, setItems] = useState([]);
    return (
        <OrderContext.Provider
            value={{
                order,
                setOrder,
                code,
                setCode,
                total,
                setTotal,
                orderData,
                setOrderData,
                status,
                setStatus,
                items,
                setItems
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}

export function useOrderContext() {
    const { order, setOrder } = useContext(OrderContext);

    async function orders() {
        try {
            const data = await configAxios.get("/api/products");
            setOrder(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        orders
    };
}