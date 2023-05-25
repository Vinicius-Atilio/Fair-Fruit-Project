import { Container } from './styles';

import { useEffect, memo} from 'react';

import { useOrderContext } from 'common/contexts/Order';
import { useContext } from 'react';
import { UserContext } from 'common/contexts/Register';

function Order({
    code,
    total,
    orderData,
    status,
    items
}) {
    const {orders} = useOrderContext();
    const {userId} = useContext(UserContext);

    const getOrders = async () => {
        await orders(userId);
    }

    useEffect(() => {
        getOrders();
    }, [])


    return (
        <Container className="get" key={code}>
            <div>
                <p>
                    <h2>ORDER CODE</h2>
                    {code}
                </p>
                <p>
                    <h2>STATUS</h2>
                    {status}
                </p>
                <p>
                    <h2>DATA</h2>
                    {orderData}
                </p>
                <p>
                    <h2>PAYMENT</h2>
                </p>
                <p>
                    <h2>TOTAL</h2>
                    {total}
                </p>
                <p>
                    <h2>ITEMS</h2>
                    {items}
                </p>
                
            </div>
        </Container>
    );
}

export default memo(Order);