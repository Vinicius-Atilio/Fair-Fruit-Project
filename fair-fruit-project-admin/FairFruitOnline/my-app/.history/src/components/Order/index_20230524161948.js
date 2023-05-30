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
        <Container className="get" key={id}>
            <div>
                <p>
                    <h2>ORDER CODE</h2>
                </p>
                <p>
                    <h2>ORDER CODE</h2>
                </p>
                <p>
                    <h2>STATUS</h2>
                </p>
                <p>
                    <h2>DATA</h2>
                </p>
                <p>
                    <h2>PAYMENT</h2>
                </p>
                
            </div>
            <div>
            </div>
        </Container>
    );
}

export default memo(Order);