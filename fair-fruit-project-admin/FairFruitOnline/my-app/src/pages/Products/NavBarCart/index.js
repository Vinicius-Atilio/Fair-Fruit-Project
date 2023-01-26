import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'common/contexts/Cart';
import { useHistory } from 'react-router-dom';

export default function NavBarCart() {
    const { quantityCart } = useCartContext();
    const history = useHistory();
    return (
        <Nav>
            {/* <Logo /> */}
            <IconButton
                onClick={() => history.push('/orders')}
                disabled={quantityCart === 0}
            >
                <Badge badgeContent={quantityCart} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Nav>
    );
}
