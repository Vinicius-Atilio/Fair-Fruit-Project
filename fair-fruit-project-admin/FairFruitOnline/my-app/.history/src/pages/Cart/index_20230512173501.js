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
import { useContext, useMemo, useState, useEffect } from 'react';
import { Container, Back, TotalContainer, PaymentContainer, List, CustomCard } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/contexts/Register';
import { usePayment } from 'common/contexts/Payment';
import configAxios from 'utils/config';

function Cart() {
    const { cart, addProduct, removeProduct, quantityCart, buy, totalValue = 0 } = useCartContext();
    const { addedProducts, setAddedProducts } = useFruitsContext();
    const {userId, userBalance} = useContext(UserContext);
    const { paymentType, changePayment, paymentTypes } = usePayment();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const history = useHistory();
    const total = useMemo(() => userBalance - totalValue, [userBalance, totalValue]);

    const handleAddHasProduct = (product) => {
        const hasItem = addedProducts.find((item) => item.id === product.id);
        if (hasItem) {
            const add = addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: hasItem.quantity + 1
            })
            console.log(add);
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

    const onSubmit = async () => {

        const payload = cart.map((p) => ({ product: p.id, quantity: p.quantity}));

        const order = {
            client: userId,
            total: totalValue,
            items: payload
        }

        await configAxios.post("/api/orders", order)

    }

    useEffect(() => {
        console.log(addedProducts);
      },[addedProducts])
    
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
