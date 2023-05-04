import { Button, StylesProvider } from '@material-ui/core';
import { Container, Title, ImageContainer, InputContainer, CustomIcon, Image, StyledButton, SignInContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import {
    Input,
    InputLabel,
    FormControl,
    TextField,
    NativeSelect,
} from '@material-ui/core';

import MeuOvo from '../../assets/meuovo.png';

import LockIcon from '@mui/icons-material/Lock';

function User() {
    const history = useHistory();

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLoginChange = (event) => {
        setUserLogin(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userAuthentication = {
            login: userLogin,
            password: userPassword,
        };
        try {
            const response = await axios.post('/api/users/auth', userAuthentication);
            const data = response.data;
            setUserLogin('');
            setUserPassword(0);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const styles = {
        form: {
          textAlign: 'left',
          spaceBetween: ''
        }
      };

      return (
        <>
          <div>
            <Container>
              <ImageContainer>
                <img src={MeuOvo} alt="Meu Ovo" height="200"/>
              </ImageContainer>
              <SignInContainer>
                <CustomIcon>
                  <LockIcon />
                </CustomIcon>
                <Title>Sign In</Title>
                <InputContainer>
                  <TextField
                    id="outlined-basic"
                    label="Login *"
                    variant="outlined"
                    value={userLogin}
                    type="text"
                    onChange={handleLoginChange} />
                </InputContainer>
                <InputContainer>
                  <TextField
                    id="outlined-basic"
                    label="Password *"
                    variant="outlined"
                    value={userPassword}
                    type="password"
                    onChange={handlePasswordChange} />
                </InputContainer>
                <StyledButton
                  onSubmit={handleSubmit}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={userLogin.length < 4}
                  onClick={() => history.push('/products')}
                >
                  Sign In
                </StyledButton>
              </SignInContainer>
            </Container>
          </div>
        </>
      );
    }

export default User;
