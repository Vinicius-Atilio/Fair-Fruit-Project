import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState, useEffect, useContext } from 'react';
import {TextField} from '@material-ui/core';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import ApiService from '../../service/apiService.js';
import { UserContext, useSingUpContext } from 'common/contexts/User';
import { Auth } from 'service/auth';

function SingIn() {
  // const [userLogin, setUserLogin] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  const {login, seLogin, password, setPassword} =  useContext(UserContext);
  const auth = useSingUpContext();

  const history = useHistory();
  const handleLoginChange = (event) => {
      seLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userAuthentication = {
      login: login,
      password: password,
    };

    try {
      // await ApiService.auth('/api/users/auth', userAuthentication);
      auth(userAuthentication);
      // localStorage.setItem('jwtToken', jwtToken);
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
                  value={login}
                  type="text"
                  onChange={handleLoginChange} />
              </InputForm>
              <InputForm>
                <TextField
                  id="outlined-basic"
                  label="Password *"
                  variant="outlined"
                  value={password}
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
                disabled={login.length < 4}
                // onClick={() => history.push('/products')}
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
