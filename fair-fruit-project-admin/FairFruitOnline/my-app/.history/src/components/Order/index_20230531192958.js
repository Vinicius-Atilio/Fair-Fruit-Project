import { Container, Header, ImageContainer, DividerContainer, DetailsContainer, ProductContainer, OrderDetails, FeesDetails } from './styles';
import { memo} from 'react';
import useDetails from "hooks/details";
import { ExpandButton } from "components/ExpendableButton";
import Divider from '@mui/material/Divider';

function Order({
    code,
    orderFees,
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
                </div>
            </Container>
            { open && <DetailsContainer products={products}>
                <Header>
                        <h2>PRODUCT</h2>
                        <h2>QUANTITY</h2>
                    <div>
                        <h2>PRICE</h2>
                    </div>
                        <h3>TOTAL</h3>
                </Header>
            {products.map(product => 
                <ProductContainer>
                    <ImageContainer>
                        <div>
                            <img
                                src={`${product.productImage}`}
                                alt={`${product.productName}`}
                                width="80" height="70"/>
                            <h2>{product.productName}</h2>
                        </div>
                    </ImageContainer>
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
            <DividerContainer>
                <Divider />
            </DividerContainer>
                <FeesDetails>
                    <div>
                        <h2>Fees</h2>
                    </div>
                    <div>
                        {orderFees}
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