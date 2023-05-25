import Order from "components/Order";
import { useContext } from "react";
import OrderContext from 'common/contexts/Order';
import { Container, List } from './styles';

function Orders() {

    const {order, setOrder, code, setCode, total, setTotal,
         orderData, setOrderData, status,
         setStatus, items, setItems} = useContext(OrderContext);

    
    return (
        <Container>
            <List>
                {order.map(o => (
                    <Order
                        {...o}
                        key={o.code}/>))}
            </List>
        </Container>
    );
}

export default Orders;
