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

    const [products, setProduct] = useState([]);
    const { cart, addProduct, removeProduct, totalValue } = useCartContext();
    const hasItem = cart.find((item) => item.id === id);

    const getPosts = async () => {
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
        getPosts();
    }, [])

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
                                        id: id,
                                        name: name,
                                        price: price,
                                        quantity: 1
                                    })}
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
