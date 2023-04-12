import { Button, StylesProvider } from '@material-ui/core';
import { Container, Title, ImageContainer, InputForm, CustomIcon, Image, StyledButton, SignInContainer, InputContainer } from './styles';
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

import Fruit from '../../assets/fruit.png';

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
      console.log("handleSubmit");
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
                <Image src={Fruit} alt="Fruit" />
              </ImageContainer>
              <SignInContainer>
                <CustomIcon>
                  <LockIcon />
                </CustomIcon>
                <Title>Sign In</Title>
                <InputContainer>
                  <InputForm>
                    <TextField
                      id="outlined-basic"
                      label="Login *"
                      variant="outlined"
                      value={userLogin}
                      type="text"
                      onChange={handleLoginChange} />
                  </InputForm>
                  <InputForm>
                    <TextField
                      id="outlined-basic"
                      label="Password *"
                      variant="outlined"
                      value={userPassword}
                      type="password"
                      onChange={handlePasswordChange} />
                  </InputForm>
                </InputContainer>
                {/* <form onSubmit={handleSubmit}> */}
                  <StyledButton
                    onSubmit={handleSubmit}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={userLogin.length < 4}
                    onClick={() => console.log("click")}
                    // onClick={() => history.push('/products')}
                  >
                    Sign In
                  </StyledButton>
                {/* </form> */}
                  <p><a href="forgot_password_page.html">Forgot password?</a> </p>
                  <p><a href="sign_up_page.html">Don't have an account? Sign Up</a></p>
              </SignInContainer>
            </Container>
          </div>
        </>
      );
    }

export default User;
