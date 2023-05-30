import { Container, Header, List } from './styles';
import { useContext } from 'react';
import { LoginContext } from 'common/contexts/Login';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarOrgs';
import Product from 'components/Product';
import { useState } from 'react';
import NavBarClient from './NavBarClient';
import { UserContext } from 'common/contexts/Register';
import { useFruitsContext } from 'common/contexts/Fruits';

function FairFruit() {
    const {fruit} = useFruitsContext();
    const {userName, userBalance} = useContext(UserContext);
    const [product] = useState([]);
    return (
        <Container>
            <NavBarFruits />
            <NavBarCart />
            <NavBarClient />
            <Header>
                <div>
                    <h2> Hi {userName}!</h2>
                    <h3> Balance: ${userBalance.toFixed(2)}</h3>
                </div>
                <p>Find the best products!</p>
                <div>
                    <h2>Products:</h2>
                </div>
            </Header>
                {/* <List>
                    <Product
                    {...product}
                    key={product.id}
                    />
                </List> */}
                {fruit.map(product => (
                    <Product
                        {...product}
                        key={product.id}
                    />
        ))}
        </Container>
    );
}

export default FairFruit;
