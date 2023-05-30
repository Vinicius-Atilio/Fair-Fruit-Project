import Order from "components/Order";
import { useContext, useEffect } from "react";
import OrderContext, { useOrderContext } from 'common/contexts/Order';
import { Container, List, Voltar } from './styles';
import { useHistory } from 'react-router-dom';
useOrderContext

function Orders() {
    const {order, orders} = useOrderContext();
        
    const history = useHistory();

    useEffect(() => {
        getProducts();
    }, [])
    
    return (
        <Container>
            <Voltar onClick={history.goBack} />
            <h2>Orders</h2>
            <List>
                {order.map(o => (
                    <Order
                        {...o}
                        key={o.cpf}/>))}
            </List>
        </Container>
    );
}

export default Orders;
