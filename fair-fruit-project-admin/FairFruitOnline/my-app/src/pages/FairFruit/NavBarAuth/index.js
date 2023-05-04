import { Nav, LogoContainer, ButtonContainer } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import { logout, resetLogin } from 'slices/slice';



export default function NavBarAuth() {
    const {auth} = useAuth();
    const {user} = useSelector((state) => state.auth);    
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        dispatch(resetLogin())

        history.push("/");
    }

    return (
        <Nav>
            {auth ? (
                <>
                <li>
                    <NavLink to="/products">
                        <HomeIcon/>
                    </NavLink>
                </li>
                    {user && (
                        <li>
                        <NavLink to="/perfil">
                            <GroupAddIcon/>
                        </NavLink>
                    </li>
                    )}
                    <li>
                        <span onClick={handleLogout}>Sair</span>
                    </li>
                </>
            ) : (
                <>
                <NavLink to="/">
                    <HomeIcon/>
                </NavLink>
                </>
            )}
            
        </Nav>
    );
}
