import Order from "components/Order";
import { useContext, useEffect } from "react";
import useOrderContext from 'common/contexts/Order';
import { Container, List, Voltar } from './styles';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/contexts/Register';

function Orders() {
    const {order, orders} = useOrderContext();
    const {userId} = useContext(UserContext);
    const history = useHistory();

    const getOrders = async () => {
        await orders(userId);
    }

    useEffect(() => {
        getOrders();
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
