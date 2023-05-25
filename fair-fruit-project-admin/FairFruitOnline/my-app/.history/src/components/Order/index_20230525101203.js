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
                <h2>ORDER CODE</h2>
                {code}
                <h2>STATUS</h2>
                {status}

                <h2>DATA</h2>
                {orderData}

                <h2>PAYMENT</h2>

                <h2>TOTAL</h2>
                {total}

                <h2>ITEMS</h2>
                {items}
            </div>
        </Container>
    );
}

export default memo(Order);