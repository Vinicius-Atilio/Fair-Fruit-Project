import { Container, Header, CustomCard, List } from './styles';
import { memo, useContext, useEffect, useState } from 'react';
import { useCartContext } from 'common/contexts/Cart';
import { useProductContext } from 'common/contexts/Product';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';


function Product() {

    const [products, setProduct] = useState([]);
    const { cart, addProduct, removeProduct, totalValue, balance } = useCartContext();
    const [addedProducts, setAddedProducts] = useProductContext();

    const getProducts = async () => {
        try {
            const response = await axios.get("/api/products");
            const data = response.data;
            setProduct(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const handleAddProduct = (product) => {
        const hasItem = cart.find((item) => item.id === product.id);
        if (hasItem) {
            addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: hasItem.quantity + 1
            })
        } else {
            addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            })
            setAddedProducts([...addedProducts, product]);
        }
    }

    const handleRemoveProduct = (product) => {
        const hasItem = cart.find((item) => item.id === product.id);
        if (hasItem && hasItem.quantity > 0) {
            removeProduct(product.id);
            setAddedProducts(addedProducts.filter(p => p.id !== product.id));
        }
    }

    return (
        <>
            {products.length === 0 ? <p>Loading...</p> : (
                products.map((product) => (
                    <Container className="get" key={product.id}>
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
                                onClick={() => handleRemoveProduct(product)}
                                color="secondary"
                            >
                                <RemoveIcon />
                            </IconButton>
                            {cart.find((item) => item.id === product.id)?.quantity || 0}
                            <IconButton
                            // disabled={totalValue > balance}
                                onClick={() => handleAddProduct(product)}
                                color="primary"
                            >
                                <AddIcon />
                            </IconButton>
                        </div>
                    </Container>
                ))
            )}
        </>
    );
}

export default memo(Product);