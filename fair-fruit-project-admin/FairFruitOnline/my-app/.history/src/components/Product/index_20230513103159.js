import { Container } from './styles';
import { memo, useEffect, useState } from 'react';
import { useCartContext } from 'common/contexts/Cart';
import { useFruitsContext } from 'common/contexts/Fruits';
import Fruits from 'components/Fruits';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import apiService from 'service/apiService';
import configAxios from 'utils/config';


function Product() {

    const [products, setProduct] = useState([]);
    const { cart, setCart, addProduct, removeProduct, totalValue, balance } = useCartContext();
    const { addedProducts, setAddedProducts } = useFruitsContext();

    const getProducts = async () => {
        try {
            const data = await configAxios.get("/api/products");
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
        addProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
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
                                disabled={cart.find((item) => item.id === product.id).quantity === 0}
                                onClick={() => removeProduct(product.id)}
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