import {
    Button,
    MenuItem,
    Select,
    Snackbar,
    InputLabel,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/contexts/Cart';
import Product from 'components/Product';
import { useContext, useMemo, useState } from 'react';
import { Container, Back, TotalContainer, PaymentContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/contexts/Client';
import { usePayment } from 'common/contexts/Payment';

function Cart() {
    const { cart, quantityCart, buy, totalValue = 0 } = useCartContext();
    const { balance = 0 } = useContext(UserContext);
    const { paymentType, changePayment, paymentTypes } = usePayment();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const history = useHistory();
    const total = useMemo(() => balance - totalValue, [balance, totalValue]);
    return (
        <Container>
            <Back onClick={history.goBack} />
            <h2>Cart</h2>
            {cart.map((product) => (
                <Product {...product} key={product.id} />
            ))}
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
