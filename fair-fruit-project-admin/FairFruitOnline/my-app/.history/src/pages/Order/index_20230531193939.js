import Order from "components/Order";
import { useContext, useEffect, useState } from "react";
import { Container, List, Back, Header, CustomIcon, Title } from './styles';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/contexts/Register';
import { useOrderContext } from "common/contexts/Order";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CircularProgress from '@mui/material/CircularProgress';

function Orders() {
    const {order, orders} = useOrderContext();
    const {userId} = useContext(UserContext);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const getOrders = async () => {
        setIsLoading(true);
        const ordersList = await orders(userId);
        console.log(ordersList);
        setIsLoading(false);
    }

    useEffect(() => {
        getOrders();
    }, [])
    
    return ( 
        <Container>
            <Back onClick={history.goBack} />
            <Header>
                <div>
                    <CustomIcon>
                        <ShoppingBasketIcon color="primary"/>
                    </CustomIcon>
                </div>
                <Title>
                    <h2>My Orders</h2>
                </Title>
            </Header>
            {isLoading ? <CircularProgress color="success"/> :
                <List>
                    {order.map(ordersList => (
                        <Order
                            {...ordersList}
                            key={ordersList.code}/>))}
                </List>
            }
        </Container>
    );
}

export default Orders;
