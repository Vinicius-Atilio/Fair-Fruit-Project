import { createContext, useContext, useEffect, useState } from 'react';
import { usePayment } from './Payment';
import { UserContext } from 'common/contexts/Register';
import configAxios from 'utils/config';

const CartContext = createContext();
CartContext.displayName = 'Cart';

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                quantityCart,
                setQuantityCart,
                totalValue,
                setTotalValue,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    const {
        cart,
        setCart,
        quantityCart,
        setQuantityCart,
        totalValue,
        setTotalValue,
    } = useContext(CartContext);

    const {userBalance, setUserBalance} = useContext(UserContext);

    const { paymentType } = usePayment();

    const changeQuantity = (id, quantity) => cart.map(item => {
        if (item.id === id) item.quantity += quantity;
        return item;
    });

    function addProduct(newProduct = {}) {
        console.log(newProduct);
        const hasProduct = cart.some(item => item.id === newProduct.id);
        let newCart = [...cart];
        if (!hasProduct) {
            newProduct.quantity = 1;
            newCart.push(newProduct);
            return setCart(newCart);
        }
        newCart = changeQuantity(newProduct.id, 1);
        console.log(newCart);
        setCart(newCart);
    }

    function removeProduct(id) {
        const product = cart.find((item) => item.id === id);
        const last = product.quantity === 1;
        let newCart;
        if (last) {
            newCart = cart.filter((item) => item.id !== id);
            return setCart(newCart);
        }
        newCart = changeQuantity(id, -1);
        setCart(newCart);
    }

    function buy() {
        setCart([]);
        setUserBalance(userBalance - totalValue);
    }

    async function order(data){
        try {
            await configAxios.post("/api/orders", data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let { newQuantity, newTotal } = cart.reduce((count, newItem) => ({
            newQuantity: count.newQuantity + newItem.quantity,
            newTotal: count.newTotal + (newItem.price * newItem.quantity)
            }), { newQuantity: 0, newTotal: 0 });
        setQuantityCart(newQuantity);
        setTotalValue(newTotal * paymentType.fees);
    }, [cart, paymentType, setQuantityCart, setTotalValue]);

    return {
        cart,
        setCart,
        addProduct,
        removeProduct,
        quantityCart,
        totalValue,
        buy,
        order
    };
}
