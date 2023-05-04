import { Container, Header, List } from './styles';
import { useContext, useEffect } from 'react';
import { UserContext } from 'common/contexts/Client';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarFruits';
import feira from './products.json';
import Product from 'components/Product';
import axios from 'axios';
import { useState } from 'react';
import { post } from 'react-ajax/src/request';
import { useCartContext } from 'common/contexts/Cart';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';


function Products({name, picture, price, unidade}) {
    const { balance = 0 } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const { cart, addProduct, removeProduct, totalValue } = useCartContext();
    const hasItem = cart.find((item) => item.id === posts.id);

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
            <NavBarFruits />
            <NavBarCart />
            <Header>
                <div>
                    <h2> Hi {name}!</h2>
                    <h3> Balance: ${balance.toFixed(2)}</h3>
                </div>
                <p>Find the best products!</p>
            </Header>
                <h2>Products:</h2>
            <List>
                <h2>Products:</h2>
                {feira.map((getPosts) => (
                    <Product {...getPosts} key={getPosts.id} />
                ))}
            </List>
        </Container>
    );
}

export default Products;
