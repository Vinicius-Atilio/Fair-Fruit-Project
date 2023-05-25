import { Container, Details } from './styles';

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
            <Details>
                <h2>ORDER CODE</h2>
                <div>
                    {code}
                </div>
            </Details>
            <Details>
                <h2>STATUS</h2>
                <div>
                    {status}
                </div>
            </Details>
            <Details>
                <h2>DATA</h2>
                <div>
                    {orderData}
                </div>
            </Details>
            <Details>
                {orderData}
            </Details>
            <Details>
                <h2>PAYMENT</h2>
            </Details>
            <Details>
            </Details>
            <Details>
                <h2>TOTAL</h2>
            </Details>
            <Details>
                {total}
            </Details>
            <Details>
                <h2>ITEMS</h2>
            </Details>
            <Details>
            </Details>
        </Container>
    );
}

export default memo(Order);