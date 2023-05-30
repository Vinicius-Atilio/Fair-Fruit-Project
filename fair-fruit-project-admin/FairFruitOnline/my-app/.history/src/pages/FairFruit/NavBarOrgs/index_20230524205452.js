import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';

export default function NavBarFruits() {
    const history = useHistory();
    return (
        <Nav>
            <IconButton
                onClick={() => history.push('/org')}
            >
                <Badge overlap="rectangular" color="primary">
                    <Logo />
                </Badge>
            </IconButton>
        </Nav>
    );
}
