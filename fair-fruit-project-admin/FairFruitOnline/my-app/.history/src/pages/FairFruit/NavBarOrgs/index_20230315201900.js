import { Nav, LogoContainer, ButtonContainer } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
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
      <ButtonContainer>
      <IconButton
        onClick={() => history.push('/orgs')}
        disabled={isAdmin === false}
        >
        <Badge overlap="rectangular" badgeContent={isAdmin} color="primary">
            <Logo />
        </Badge>
        </IconButton>
      </ButtonContainer>
    </Nav>
  );
}
