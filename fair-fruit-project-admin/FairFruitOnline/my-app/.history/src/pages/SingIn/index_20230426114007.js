import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState, useEffect } from 'react';
import {TextField} from '@material-ui/core';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import ApiService from '../../service/apiService.js';

function SingIn() {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const history = useHistory();
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
      // localStorage.removeItem('jwtToken');
      const jwtToken = await ApiService.auth('/api/users/auth', userAuthentication);
      console.log(jwtToken);
      localStorage.setItem('jwtToken', jwtToken);
      // ApiService.api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
      const product = await ApiService.get('/api/products');
      console.log(product);
      
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
                onClick={() => history.push('/products')}
              >
                Sign In
              </StyledButton>
            </StyledForm>
              <p><a href="forgot_password_page.html">Forgot password?</a> </p>
              <p><a href="http://localhost:3000/singup">Don't have an account? Sign Up</a></p>
          </SignInContainer>
        </Container>
      </div>
    </>
  );
}

export default SingIn;
