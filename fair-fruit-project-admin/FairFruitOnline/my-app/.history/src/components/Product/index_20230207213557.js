import { Container } from './styles';
import { memo, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCartContext } from 'common/contexts/Cart';
import { UserContext } from 'common/contexts/Client';

function Product({ name, picture, id, price, unidade }) {
    const { cart, addProduct, removeProduct, totalValue } = useCartContext();
    const { balance } = useContext(UserContext);
    const hasItem = cart.find((item) => item.id === id);

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get("/api/products");
            const data = response.data;
            setPosts(data);
            console.log(data);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <Container>
            {/* <div>
                <img
                    src={`/assets/${picture}.png`}
                    alt={`picture of ${name}`}
                />
                <p>
                    {name} - $ {price?.toFixed(2)} <span>Kg</span>
                </p>
            </div> */}
            <div>
                <img
                    src={`/assets/${picture}.png`}
                    alt={`picture of ${name}`}
                />
                <p>
                    {posts.description} - $ {posts.price?.toFixed(2)} <span>Kg</span>
                </p>
            </div>
            <div>
                <IconButton
                    onClick={() => removeProduct(id)}
                    disabled={!hasItem || hasItem.quantity === 0}
                    color="secondary"
                >
                    <RemoveIcon />
                </IconButton>
                {hasItem?.quantity || 0}
                <IconButton
                    disabled={totalValue > balance}
                    onClick={() =>
                        addProduct({
                            name,
                            picture,
                            id,
                            price,
                            unidade,
                        })
                    }
                    color="primary"
                >
                    <AddIcon />
                </IconButton>
            </div>
        </Container>
    );
}

export default memo(Product);
