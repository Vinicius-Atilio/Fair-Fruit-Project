import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState } from 'react';
import axios from 'axios';
import {TextField} from '@material-ui/core';

import Fruit from '../../assets/fruit.png';

import LockIcon from '@mui/icons-material/Lock';

function User() {
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
        const userId = response.data.id;
        console.log("userId: " + userId);
    
        // store the token in local storage
        localStorage.setItem('jwtToken', data.token);
    
        // include the token in the Authorization header of subsequent requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    
        // make another request to get the user's data
        const userResponse = await axios.get(`/api/users/${userId}`);
        const userData = userResponse.data;
        console.log(userData);
      } catch (error) {
        console.log(error);
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
                <StyledForm onSubmit={handleSubmit}>
                  <StyledButton
                    onSubmit={handleSubmit}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={userLogin.length < 4}
                    // onClick={() => history.push('/products')}
                  >
                    Sign In
                  </StyledButton>
                </StyledForm>
                  <p><a href="forgot_password_page.html">Forgot password?</a> </p>
                  <p><a href="http://localhost:3000/client">Don't have an account? Sign Up</a></p>
              </SignInContainer>
            </Container>
          </div>
        </>
      );
    }

export default User;
