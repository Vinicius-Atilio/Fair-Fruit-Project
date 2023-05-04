import { Container, Header, List } from './styles';
import { useContext } from 'react';
import { LoginContext } from 'common/contexts/Login';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarOrgs';
import Product from 'components/Product';
import { useState } from 'react';
import NavBarClient from './NavBarClient';


function FairFruit({name, id}) {
    const { balance = 0 } = useContext(LoginContext);
    const [product] = useState([]);
    return (
        <Container>
            <NavBarFruits />
            <NavBarCart />
            <NavBarClient />
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

export default FairFruit;
