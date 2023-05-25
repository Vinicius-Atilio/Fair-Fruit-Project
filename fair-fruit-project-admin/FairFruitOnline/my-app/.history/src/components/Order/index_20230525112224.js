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
                <h2>CODE</h2>
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
                <h2>PAYMENT</h2>
            </Details>
            <Details>
            </Details>
            <Details>
                <h2>TOTAL</h2>
                <div>
                    {total}
                </div>
            </Details>
            <Details>
                <h2>ITEMS</h2>
            </Details>
        </Container>
    );
}

export default memo(Order);