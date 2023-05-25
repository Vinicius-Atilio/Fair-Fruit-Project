import Order from "components/Order";
import { useContext } from "react";
import OrderContext from 'common/contexts/Order';

function Orders() {
    
    const {code, setCode, total, setTotal,
         orderData, setOrderData, status,
         setStatus, items, setItems} = useContext(OrderContext);

    
    return (
        <>
        </>
    );
}

export default Orders;
