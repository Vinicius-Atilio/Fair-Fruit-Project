import Order from "components/Order";
import { useContext, useEffect } from "react";
import { Container, List, Back } from './styles';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/contexts/Register';
import { useOrderContext } from "common/contexts/Order";

function Orders() {
    const {order, orders} = useOrderContext();
    const {userId} = useContext(UserContext);
    const history = useHistory();

    const getOrders = async () => {
        console.log('heeyyy order?')
        const o = await orders(userId);
        console.log(o);
    }

    useEffect(() => {
        getOrders();
    }, [])
    
    return (
        <Container>
            <Back onClick={history.goBack} />
            <h2>My Orders</h2>
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
