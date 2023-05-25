import { Container, Details } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { memo} from 'react';

function Order({
    code,
    total,
    orderData,
    status,
    payment,
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
                <div>
                    {payment}
                </div>
            </Details>
            <Details>
                <ExpandMoreIcon></ExpandMoreIcon>
                <h2>Details of Order</h2>
            </Details>
        </Container>
    );
}

export default memo(Order);