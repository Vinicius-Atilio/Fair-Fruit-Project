import { Container } from './styles';

import { memo} from 'react';

function Order({
    code,
    total,
    orderData,
    status,
    items
}) {

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
            </div>
        </Container>
    );
}

export default memo(Order);