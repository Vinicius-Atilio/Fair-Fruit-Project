import { createContext, useContext, useEffect, useState } from 'react';
import { usePayment } from './Payment';
import { UserContext } from 'common/contexts/Register';
import configAxios from 'utils/config';

const OrderContext = createContext();
OrderContext.displayName = 'Order';

export default function OrderProvider({ children }) {
    const [code, setCode] = useState([]);
    const [total, setTotal] = useState(0);
    const [orderData, setOrderData] = useState('');
    const [status, setStatus] = useState('');
    return (
        <OrderContext.Provider
            value={{
                code,
                setCode,
                total,
                setTotal,
                orderData,
                setOrderData,
                status,
                setStatus
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}