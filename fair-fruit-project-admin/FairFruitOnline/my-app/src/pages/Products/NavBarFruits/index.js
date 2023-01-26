import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useFruitsContext } from 'common/contexts/Fruits';
import { useHistory } from 'react-router-dom';

export default function NavBarFruits() {
    const { isAdmin } = useFruitsContext();
    const history = useHistory();
    return (
        <Nav>
            <IconButton
                onClick={() => history.push('/fruits')}
                disabled={isAdmin === false}
            >
                <Badge badgeContent={isAdmin} color="primary">
                    <Logo />
                </Badge>
            </IconButton>
        </Nav>
    );
}
