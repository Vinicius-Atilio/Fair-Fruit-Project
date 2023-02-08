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


function Products() {
    const { name, balance = 0 } = useContext(UserContext);
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
            <NavBarFruits />
            <NavBarCart />
            <Header>
                <div>
                    <h2> Hi {name}!</h2>
                    <h3> Balance: ${balance.toFixed(2)}</h3>
                </div>
                <p>Find the best products!</p>
            </Header>
            <List>
                <h2>Products:</h2>
                {posts.length == 0 ? <p>Loading...</p>: (
                    posts.map((products) => (
                        <div className="post" key={products.id}>
                            <h2>{products.description}</h2>
                        </div>
                    ))
                )}
            </List>z
            {/* <List>
                <h2>Products:</h2>
                {feira.map((getPosts) => (
                    <Product {...getPosts} key={getPosts.id} />
                ))}
            </List> */}
        </Container>
    );
}

export default Products;
