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
            <div>
                <Details>
                    <h2>ORDER CODE</h2>
                </Details>
                <Details>
                    {code}
                </Details>

                <Details>
                    <h2>STATUS</h2>
                </Details>
                <Details>
                    {status}
                </Details>

                <Details>
                    <h2>DATA</h2>
                </Details>
                <Details>
                    {orderData}
                </Details>

                <Details>
                    <h2>ORDER CODE</h2>
                </Details>
                <Details>
                    {code}
                </Details>

                <Details>
                    <h2>ORDER CODE</h2>
                </Details>
                <Details>
                    {code}
                </Details>

                <Details>
                    <h2>ORDER CODE</h2>
                </Details>
                <Details>
                    {code}
                </Details>
                

                

                

                <h2>PAYMENT</h2>

                <h2>TOTAL</h2>
                {total}

                <h2>ITEMS</h2>
            </div>
        </Container>
    );
}

export default memo(Order);