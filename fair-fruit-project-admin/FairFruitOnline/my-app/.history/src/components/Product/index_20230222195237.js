import { Container, Header, CustomCard, List } from './styles';
import { memo, useContext, useEffect } from 'react';
import { useCartContext } from 'common/contexts/Cart';
import axios from 'axios';
import { useState } from 'react';
import { post } from 'react-ajax/src/request';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';


function Product({ name, picture, id, price, unidade }) {

    const [product, setProduct] = useState({});
    const { cart, addProduct, removeProduct, totalValue } = useCartContext();
    const hasItem = cart.find((item) => item.id === id);

    const getPosts = async () => {
        try {
            const response = await axios.get("/api/products");
            const data = response.data;
            const productData = data.find((product) => product.id === id);
            setProduct(productData);
            console.log(productData);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            {product.id && (
                <Container className="get">
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
                            onClick={() => removeProduct(product.id)}
                            disabled={!hasItem || hasItem.quantity === 0}
                            color="secondary"
                        >
                            <RemoveIcon />
                        </IconButton>
                        {hasItem?.quantity || 0}
                        <IconButton
                            // disabled={totalValue > balance}
                            onClick={() =>
                                addProduct({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    quantity: 1
                                })}
                            color="primary"
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                </Container>
            )}
        </>
    );
}

export default memo(Product);