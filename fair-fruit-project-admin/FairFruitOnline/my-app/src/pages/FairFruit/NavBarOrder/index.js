import { Nav } from './styles';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function NavBarOrder() {
    const history = useHistory();
    return (
        <Nav>
            <IconButton
                onClick={() => history.push('/order')}
                // disabled={isAdmin === false}
            >
                <Badge overlap="rectangular" color="primary">
                    <ShoppingBasketIcon color="primary"/>
                </Badge>
            </IconButton>
        </Nav>
    );
}
