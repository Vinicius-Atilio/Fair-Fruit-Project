import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState, useEffect, useContext } from 'react';
import {TextField} from '@material-ui/core';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import { LoginContext, useAuthContext } from 'common/contexts/Login';
import { login, resetLogin } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import ApiErrorMessage from 'components/Message/Message';
import { ErrorContext } from 'common/contexts/Error';

function SingIn() {
  const {userLogin, setUserLogin, userPassword, setUserPassword} =  useContext(LoginContext);
  const [error, setError] = useContext(ErrorContext);
  const {loading, err} = useSelector((state => state.auth));
  const history = useHistory();
  const dispath = useDispatch();
  

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

    console.log("handleSubmit");

    const res = await dispath(login(userAuthentication));
    console.log(res.payload);
    if (res.error) {
      console.log('passei error');
      setError(res.payload);
    }
    console.log("error state:", error);
    console.log(err);
    // history.push("/products");

  };

  useEffect(() => {
    dispath(resetLogin());
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
            {!loading ? 
            <StyledForm onSubmit={handleSubmit}>
            <StyledButton
              onSubmit={handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
              disabled={userLogin.length < 3 && userPassword.length < 3}
            >
              Sign In
            </StyledButton>
            </StyledForm> : "Loading..."}
            {error && <ApiErrorMessage msg={error}/>}
              <p><a href="forgot_password_page.html">Forgot password?</a> </p>
              <p><a href="http://localhost:3000/singup">Don't have an account? Sign Up</a></p>
          </SignInContainer>
        </Container>
      </div>
    </>
  );
}

export default SingIn;
