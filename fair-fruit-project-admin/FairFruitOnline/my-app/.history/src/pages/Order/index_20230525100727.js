import Order from "components/Order";
import { useContext } from "react";
import OrderContext from 'common/contexts/Order';
import { Container, List, Voltar } from './styles';
import { useHistory } from 'react-router-dom';

function Orders() {
    const {order, setOrder, code, setCode, total, setTotal,
         orderData, setOrderData, status,
         setStatus, items, setItems} = useContext(OrderContext);
        
    const history = useHistory();

    
    return (
        <Container>
            <Voltar onClick={history.goBack} />
            <h2>Orders</h2>
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
