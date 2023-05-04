import {
    Button,
    MenuItem,
    Select,
    Snackbar,
    InputLabel,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/contexts/Cart';
import { useFruitsContext } from 'common/contexts/Fruits';
import { useContext, useMemo, useState } from 'react';
import { Container, Back, TotalContainer, PaymentContainer, List, CustomCard } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useHistory } from 'react-router-dom';
import { LoginContext } from 'common/contexts/Login';
import { usePayment } from 'common/contexts/Payment';

function Cart() {
    const { cart, addProduct, removeProduct, quantityCart, buy, totalValue = 0 } = useCartContext();
    const { addedProducts, setAddedProducts } = useFruitsContext();
    const { balance = 0 } = useContext(LoginContext);
    const { paymentType, changePayment, paymentTypes } = usePayment();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const history = useHistory();
    const total = useMemo(() => balance - totalValue, [balance, totalValue]);

    const handleAddHasProduct = (product) => {
        const hasItem = addedProducts.find((item) => item.id === product.id);
        if (hasItem) {
            addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: hasItem.quantity + 1
            })
        }
    }

      const handleRemoveHasProduct = (product) => {
        const hasItem = cart.find((item) => item.id === product.id);
        const last = hasItem.quantity === 1;
        if (hasItem && hasItem.quantity > 0) {
            removeProduct(hasItem.id); // update here
        }
        let newAddedProducts;
        if (last) {
            newAddedProducts = addedProducts.filter((item) => item.id !== product.id);
            setAddedProducts([...newAddedProducts]);
        }
    }
    
    return (
        <Container>
            <Back onClick={history.goBack} />
            <h2>Cart</h2>
            {addedProducts.length > 0 && (
                <div>
                    <List>
                        <>
                            {addedProducts.map(product => (
                                <CustomCard className="get" key={product.id}>
                                    <div>
                                        <img
                                            src={`${product.image}`}
                                            alt={`${product.name}`}
                                            width="80" height="70"
                                        />
                                        <p>
                                            {product.name} - $ {product.price?.toFixed(2)} <span>Kg</span>
                                        </p>
                                    </div>
                                    <div>
                                        <IconButton
                                            onClick={() => handleRemoveHasProduct(product)}
                                            color="secondary"
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        {cart.find((item) => item.id === product.id)?.quantity || 0}
                                        <IconButton
                                            onClick={() => handleAddHasProduct(product)}
                                            color="primary"
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                </CustomCard>
                            ))}
                        </>
                    </List>
                </div>
            )}            
            <PaymentContainer>
                <InputLabel> Form of payment </InputLabel>
                <Select
                    value={paymentType.id}
                    onChange={(event) => changePayment(event.target.value)}
                >
                    {paymentTypes.map((payment) => (
                        <MenuItem value={payment.id} key={payment.id}>
                            {payment.name}
                        </MenuItem>
                    ))}
                </Select>
            </PaymentContainer>
            <TotalContainer>
                <div>
                    <h2>Total in Cart: </h2>
                    <span>R$ {totalValue.toFixed(2)}</span>
                </div>
                <div>
                    <h2> Balance: </h2>
                    <span> $ {balance.toFixed(2)} </span>
                </div>
                <div>
                    <h2> Total balance: </h2>
                    <span> $ {total.toFixed(2)} </span>
                </div>
            </TotalContainer>
            <Button
                onClick={() => {
                    buy();
                    setOpenSnackbar(true);
                }}
                disabled={quantityCart === 0 || total < 0}
                color="primary"
                variant="contained"
            >
                Buy
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
            >
                <MuiAlert
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                >
                    Order reliazed!
                </MuiAlert>
            </Snackbar>
        </Container>
    );
}

export default Cart;
