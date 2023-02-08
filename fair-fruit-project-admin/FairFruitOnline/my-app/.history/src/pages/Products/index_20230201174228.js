import { Container, Header, List } from './styles';
import { useContext, useEffect } from 'react';
import { UserContext } from 'common/contexts/Client';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarFruits';
import feira from './products.json';
import Product from 'components/Product';
import { useState } from 'react';

function Products() {
    const { name, balance = 0 } = useContext(UserContext);
    const [fruits, setFruits] = useState([]);
    const getPosts = async() => {
        console.log("testando");
    }

    useEffect(() => {
        getPosts()
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
                {feira.map((product) => (
                    <Product {...product} key={product.id} />
                ))}
            </List>
        </Container>
    );
}

export default Products;
