import { Container, Info, Details } from './styles';
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
            <Info>
                <h2>CODE</h2>
                <div>
                    {code}
                </div>
            </Info>
            <Info>
                <h2>STATUS</h2>
                <div>
                    {status}
                </div>
            </Info>
            <Info>
                <h2>DATA</h2>
                <div>
                    {orderData}
                </div>
            </Info>
            <Info>
                <h2>PAYMENT</h2>
                <div>
                    {payment}
                </div>
            </Info>
            <Info>
                <Details>
                    <ExpandMoreIcon></ExpandMoreIcon>
                    <h2>Details</h2>
                </Details>
            </Info>
        </Container>
    );
}

export default memo(Order);