import { Container, Info, Details } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DetailsSection } from 'components/DetailsSection';
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
                {status}
            </div>
            <div>
                <h2>DATA</h2>
                {orderData}
            </div>
            <div>
                <h2>PAYMENT</h2>
                <p>{payment}</p>
                
            </div>
            <div>
                <h3>Details</h3>
            </div>
            {items.map((personDetails, index) => (
                <DetailsSection personDetails={personDetails} index={index} />
            ))}
        </Container>
    );
}

export default memo(Order);