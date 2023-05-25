import {
    Button,
    MenuItem,
    Select,
    Snackbar,
    InputLabel,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/contexts/Cart';
import { useContext, useMemo, useState, useEffect } from 'react';
import { Container, Back, TotalContainer, PaymentContainer, List, CustomCard } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/contexts/Register';
import { usePayment } from 'common/contexts/Payment';
import configAxios from 'utils/config';
import CircularProgress from '@mui/material/CircularProgress';
import Product from 'components/Product';

function Cart() {
    const [isLoading, setIsLoading] = useState(false);
    const { cart, buy, order, totalValue = 0 } = useCartContext();
    const {userId, userBalance} = useContext(UserContext);
    const { paymentType, changePayment, paymentTypes } = usePayment();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const history = useHistory();
    const total = useMemo(() => userBalance - totalValue, [userBalance, totalValue]);

    const onSubmit = async () => {
        setIsLoading(true);
        const items = cart.map((p) => ({ product: p.id, quantity: p.quantity}));
        const data = {
            client: userId,
            total: totalValue,
            payment: paymentType.name,
            items: items
        };
        console.log(paymentType.name);
        await order(data);
        setIsLoading(false);
    }

    useEffect(() => {
        console.log("cart", cart);
      },[cart])
    
    return (
        <Container>
            <Back onClick={history.goBack} />
            <h2>Cart</h2>
            {isLoading? <CircularProgress color="success"/> : cart.length > 0 && (
                <List>
                    {cart.map((product) => 
                    <Product
                    {...product}
                    key = {product.id}/>)}
                </List>)}
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
                    <span> $ {totalValue.toFixed(2)}</span>
                </div>
                <div>
                    <h2> Balance: </h2>
                    <span> $ {userBalance.toFixed(2)} </span>
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
                    onSubmit();
                }}
                // disabled={quantityCart === 0 || total < 0}
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
