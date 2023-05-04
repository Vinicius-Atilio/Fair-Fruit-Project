import { Nav, LogoContainer, ButtonContainer } from './styles';
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
            <LogoContainer>
            </LogoContainer>
                <ButtonContainer>
                    <IconButton
                        onClick={() => history.push('/orders')}
                        disabled={quantityCart === 0}
                    >
                        <Badge overlap="rectangular" badgeContent={quantityCart} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </ButtonContainer>
        </Nav>
    );
}
