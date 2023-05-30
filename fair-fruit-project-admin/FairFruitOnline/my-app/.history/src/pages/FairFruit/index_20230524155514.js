import { Container, Header, List } from './styles';
import { useContext } from 'react';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarOrgs';
import Product from 'components/Product';
import { useEffect } from 'react';
import NavBarOrder from './NavBarOrder';
import { UserContext } from 'common/contexts/Register';
import { useFruitsContext } from 'common/contexts/Fruits';

function FairFruit() {
    const {fruit, products} = useFruitsContext();
    const {userName, userBalance} = useContext(UserContext);
    const getProducts = async () => {
        await products();
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container>
            <NavBarFruits />
            <NavBarCart />
            <NavBarOrder />
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
                <List>
                    {fruit.map(product => (
                        <Product
                            {...product}
                            key={product.id}/>))}
                </List>
                
        </Container>
    );
}

export default FairFruit;
