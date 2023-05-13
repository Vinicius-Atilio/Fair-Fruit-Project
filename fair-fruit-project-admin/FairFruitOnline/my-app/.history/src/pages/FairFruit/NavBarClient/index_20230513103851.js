import { Nav } from './styles';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';

export default function NavBarClient() {
    const history = useHistory();
    return (
        <Nav>
            <IconButton
                onClick={() => history.push('/client')}
                // disabled={isAdmin === false}
            >
                <Badge overlap="rectangular" color="primary">
                    <GroupAddIcon color="primary"/>
                </Badge>
            </IconButton>
        </Nav>
    );
}
