import { Container, Info, DetailsContainer, ProductContainer } from './styles';
import { DetailsSection } from 'components/DetailsSection';
import { memo} from 'react';
import { useOrderContext } from "common/contexts/Order";
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useDetails from "hooks/details";
import { ExpandButton } from "components/ExpendableButton";

function Order({
    code,
    total,
    orderData,
    status,
    payment,
    items
}) {
    const { open, toggle } = useDetails(false);

    return (
        <>
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
                    <ExpandButton open={open} toggle={toggle} />
                    {/* <DetailsSection {...items}/> */}
                {/* {items.map(orderDetails => (
                    
                ))} */}
                </div>
            </Container>
            { open && <DetailsContainer items={items}>
            {items.map(it => 
                <ProductContainer>
                    <div>
                        <h2>PRODUCT</h2>
                        {it.descriptionProduct}
                    </div>
                    <div>
                        <h2>QUANTITY</h2>
                        {it.quantity}
                    </div>
                    <div>
                        <h2>UNIT PRICE</h2>
                        {it.unitPrice}
                    </div>
                    
                </ProductContainer>
            )}
                
            </DetailsContainer>}
        </>
    );
}

export default memo(Order);