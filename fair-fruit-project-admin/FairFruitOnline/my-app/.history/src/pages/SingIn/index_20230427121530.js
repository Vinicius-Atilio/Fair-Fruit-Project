import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState, useEffect, useContext } from 'react';
import {TextField} from '@material-ui/core';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import ApiService from '../../service/apiService.js';
import { AuthContext, useAuthContext } from 'common/contexts/Auth';
import { register, reset } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';



function SingIn() {
  const {login, setLogin, password, setPassword} =  useContext(AuthContext);
  const {userAuth} = useAuthContext();
  const {loading, error} = useSelector((state => state.auth));
  const history = useHistory();
  const dispath = useDispatch();
  

  const handleLoginChange = (event) => {
      setLogin(event.target.value);
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

    console.log("handleSubmit");

    dispath(register(userAuthentication));
  };

  useEffect(() => {
    dispath(reset());
  }, [dispath])

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
