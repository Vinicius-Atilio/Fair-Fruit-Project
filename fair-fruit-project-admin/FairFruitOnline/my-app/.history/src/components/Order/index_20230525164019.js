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
            <div>
                <h2>CODE</h2>
                {code}
            </div>
            <div>
                <h2>STATUS</h2>
                <div>
                    {status}
                </div>
            </div>
            <div>
                <h2>DATA</h2>
                <div>
                    {orderData}
                </div>
            </div>
            <div>
                <h2>PAYMENT</h2>
                <div>
                    {payment}
                </div>
            </div>
            <div>
                <h2>Details</h2>
                <ExpandMoreIcon color="primary"/>
            </div>
        </Container>
    );
}

export default memo(Order);