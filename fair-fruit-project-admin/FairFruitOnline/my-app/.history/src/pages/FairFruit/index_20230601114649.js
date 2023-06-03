import { Container, Header, List, CustomIcon } from './styles';
import { useContext } from 'react';
import NavBarCart from './NavBarCart';
import NavBarFruits from './NavBarOrgs';
import Product from 'components/Product';
import { useEffect } from 'react';
import NavBarOrder from './NavBarOrder';
import { UserContext } from 'common/contexts/Register';
import { useFruitsContext } from 'common/contexts/Fruits';
import WalletIcon from '@mui/icons-material/Wallet';

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
            <CustomIcon>
                <WalletIcon style={{ color: 'green' }}/>
                <div>
                    ${userBalance.toFixed(2)}
                </div>
            </CustomIcon>
            <Header>
                <div>
                    <h2> Hi {userName}!</h2>
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
