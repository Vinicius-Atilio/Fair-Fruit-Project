import { Container, Header, DetailsContainer, ProductContainer, OrderDetails, FeesDetails } from './styles';
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
    products
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
            { open && <DetailsContainer products={products}>
                <Header>
                    <div>
                        <h2>PRODUCT(S)</h2>
                    </div>
                    <div>
                        <h2>QUANTITY</h2>
                    </div>
                    <div>
                        <h2>PRICE</h2>
                    </div>
                    <div>
                        <h2>TOTAL</h2>
                    </div>
                </Header>
            {products.map(product => 
                <ProductContainer>
                    <div>
                        <img
                            src={`${product.productImage}`}
                            alt={`${product.productName}`}
                            width="80" height="70"/>
                        <div>
                            {product.productName}
                        </div>
                    </div>
                    <div>
                        {product.productQuantity}
                    </div>
                    <div>
                        {product.productPrice}
                    </div>
                    <div>
                        {product.productTotal}
                    </div>
                    
                </ProductContainer>
            )}
                <FeesDetails>
                    <div>
                        <h2>Fees</h2>
                    </div>
                    <div>
                        {total}
                    </div>
                </FeesDetails>
                <OrderDetails>
                    <div>
                        <h2>Order Total</h2>
                    </div>
                    <div>
                        {total}
                    </div>
                </OrderDetails>
            </DetailsContainer>}
        </>
    );
}

export default memo(Order);