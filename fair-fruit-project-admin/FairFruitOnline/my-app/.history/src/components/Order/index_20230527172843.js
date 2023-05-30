import { Container, Info, Details } from './styles';
import { DetailsSection } from 'components/DetailsSection';
import { memo} from 'react';
import { useOrderContext } from "common/contexts/Order";
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useDetails from "hooks/details";

function Order({
    code,
    total,
    orderData,
    status,
    payment,
    items
}) {

    const { isOpen, toggle } = useDetails(false);

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
                <IconButton onClick={console.log("click")}>
                    {isOpen? <ExpandLessIcon color="primary"/> : <ExpandMoreIcon color="primary"/>}
                </IconButton>
                {/* <DetailsSection/> */}
            {/* {items.map(orderDetails => (
                
            ))} */}
            </div>
        </Container>
    );
}

export default memo(Order);