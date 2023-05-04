import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState, useEffect, useContext } from 'react';
import {TextField} from '@material-ui/core';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import ApiService from '../../service/apiService.js';
import { LoginContext, useAuthContext } from 'common/contexts/Login';
import { login, resetLogin } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import ApiErrorMessage from 'components/Message/Message';



function SingIn() {
  const {userLogin, setUserLogin, userPassword, setUserPassword} =  useContext(LoginContext);
  const [error, setError] = useState(null);
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

    try {
      const res = await dispath(login(userAuthentication));
      console.log(res.payload);
      if (res.error) {
        const apiError = res.error.payload;
        console.log('passei error');
        console.log(apiError);
        setError(res.payload);
      }
      console.log(error);
      setError(null);
      // history.push("/products");
    } catch (err) {
      console.log("indexJsError");
      console.log(err);
      setError(err);
    }

  };

  const handleClick = () =>{
    console.log(userLogin)
    if (userLogin){
      // history.push("/products");
    }
    console.log(error);
  }

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
            {err && <ApiErrorMessage msg={error}/>}
              <p><a href="forgot_password_page.html">Forgot password?</a> </p>
              <p><a href="http://localhost:3000/singup">Don't have an account? Sign Up</a></p>
          </SignInContainer>
        </Container>
      </div>
    </>
  );
}

export default SingIn;
