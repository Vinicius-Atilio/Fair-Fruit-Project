import { Container } from './styles';
import { useEffect, memo} from 'react';
import { useOrderContext } from 'common/contexts/Order';

function Order({
    code,
    total,
    orderData,
    status,
    items
}) {

    const {orders} = useOrderContext();



    const getOrders = async () => {
        await orders();
    }

    useEffect(() => {
        getProducts();
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