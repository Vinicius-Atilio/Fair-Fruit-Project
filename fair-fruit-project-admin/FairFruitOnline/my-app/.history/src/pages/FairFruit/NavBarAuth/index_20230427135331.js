import { Nav, LogoContainer, ButtonContainer } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';



export default function NavBarAuth() {
    const {auth} = useAuth();
    const {user} = useSelector((state) => state.auth);


    const history = useHistory();

    return (
        <Nav>
            {auth ? (
                <>
                <li>
                    <NavLink>
                        <FairFruit/>
                    </NavLink>
                </li>
                </>
            ) : (
                <>
                <NavLink>
                    <SingIn/>
                </NavLink>
                </>
            )}
            
        </Nav>
    );
}
