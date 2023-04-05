import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useFruitsContext } from 'common/contexts/Fruits';
import { useHistory } from 'react-router-dom';

export default function NavBarClient() {
    const { isAdmin } = useFruitsContext();
    const history = useHistory();
    return (
        <Nav>
            <IconButton
                onClick={() => history.push('/client')}
                disabled={isAdmin === false}
            >
                <Badge overlap="rectangular" badgeContent={isAdmin} color="primary">
                    <GroupAddIcon />
                </Badge>
            </IconButton>
        </Nav>
    );
}
