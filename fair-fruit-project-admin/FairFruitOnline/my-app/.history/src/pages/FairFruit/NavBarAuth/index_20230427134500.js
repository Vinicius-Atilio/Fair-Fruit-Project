import { Nav, LogoContainer, ButtonContainer } from './styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';



export default function NavBarAuth() {


    const history = useHistory();

    return (
        <Nav>
            <LogoContainer>
            </LogoContainer>
                <ButtonContainer>
                    <IconButton
                        onClick={() => history.push('/orders')}

                    >
                        <Badge overlap="rectangular" badgeContent={''} color="primary">
                        </Badge>
                    </IconButton>
                </ButtonContainer>
        </Nav>
    );
}
