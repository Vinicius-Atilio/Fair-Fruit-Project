import Order from "components/Order";
import { useContext } from "react";
import OrderContext from 'common/contexts/Order';
import { Container, List } from './styles';

function Orders() {

    const {code, setCode, total, setTotal,
         orderData, setOrderData, status,
         setStatus, items, setItems} = useContext(OrderContext);

    
    return (
        <Container>
            <List>
                {}
            </List>
        </Container>
    );
}

export default Orders;
