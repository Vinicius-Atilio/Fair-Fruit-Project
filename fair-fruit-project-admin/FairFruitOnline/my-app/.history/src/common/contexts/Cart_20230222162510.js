import { createContext, useContext, useEffect, useState } from 'react';
import { usePayment } from './Payment';
import { UserContext } from './Client';
import axios from 'axios';

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

    const [product, setProduct] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get("/api/products");
            const data = response.data;
            setProduct(data);
            console.log(data);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    const { balance, setBalance } = useContext(UserContext);

    const { paymentType } = usePayment();

    const changeQuantity = (id, quantity) =>
        cart.map((item) => {
            if (item.id === id) item.quantity += quantity;
            return item;
        });

    function addProduct(product) {
        const hasProduct = cart.some((item) => item.id === product.id);
        let newCart = [...cart];
        if (!hasProduct) {
            product.quantity = 1;
            newCart.push(product);
            return setCart(newCart);
        }
        newCart = changeQuantity(product.id, 1);
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
        setBalance(balance - totalValue);
    }

    useEffect(() => {
        let { newQuantity, newTotal } = cart.reduce(
            (count, newItem) => ({
                newQuantity: count.newQuantity + newItem.quantity,
                newTotal: count.newTotal + newItem.valor * newItem.quantity,
            }),
            { newQuantity: 0, newTotal: 0 }
        );
        setQuantityCart(newQuantity);
        setTotalValue(newTotal * paymentType.fees);
    }, [cart, paymentType, setQuantityCart, setTotalValue]);

    return {
        cart,
        addProduct,
        removeProduct,
        quantityCart,
        totalValue,
        buy,
    };
}
