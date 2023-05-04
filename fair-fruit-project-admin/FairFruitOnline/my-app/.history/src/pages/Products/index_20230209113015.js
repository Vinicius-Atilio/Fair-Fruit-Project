import { Container, Header, List } from './styles';
import { useContext } from 'react';
import { UserContext } from 'common/contexts/Client';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarFruits';
import Product from 'components/Product';
import { useState } from 'react';


function Products({name, id}) {
    const { balance = 0 } = useContext(UserContext);
    const [product, setProduct] = useState([]);
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
                <div>
                    <h2>Products:</h2>
                </div>
            </Header>
                <List>
                    <Product
                    {...product}
                    key={product.id}
                    />
                </List>
        </Container>
    );
}

export default Products;
