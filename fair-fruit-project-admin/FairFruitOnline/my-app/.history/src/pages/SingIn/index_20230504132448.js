import { Container, FormLoginContainer, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, InputContainer, Messages } from './styles';
import { useState, useEffect, useContext } from 'react';
// import {TextField} from '@material-ui/core';

import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import { LoginContext, useAuthContext } from 'common/contexts/Login';
import { login, resetLogin } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import ApiErrorMessage from 'components/Message';
import { ErrorContext } from 'common/contexts/Error';
import { useForm } from 'react-hook-form';
import { Button, Radio, TextField, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText,
FormGroup, CheckBox } from '@mui/material';

function SingIn() {
  const {userLogin, setUserLogin, userPassword, setUserPassword} =  useContext(LoginContext);
  const {error, setError} = useContext(ErrorContext);
  const {register, handleSubmit, watch, formState: {errors}, clearErrors} = useForm();
  const {loading} = useSelector((state => state.auth));
  const history = useHistory();
  const dispath = useDispatch();
  

  const handleLoginChange = (event) => {
      setUserLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
      setUserPassword(event.target.value);
  };

  const onSubmit = async () => {

    console.log("handleSubmit");

    const userAuthentication = {
      login: userLogin,
      password: userPassword,
    };


    const res = await dispath(login(userAuthentication));
    console.log(res.payload);
    if (res.error) {
      console.log('passei error');
      setError(res.payload);
    }
    console.log("error state:", error);
    console.log(error);
    // history.push("/products");

  };

  useEffect(() => {
    dispath(resetLogin());
  }, [dispath])

  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={Fruit} alt="Fruit" />
        </ImageContainer>
          <FormLoginContainer>
            <CustomIcon>
              <LockIcon />
            </CustomIcon>
            <Title>Sign In</Title>
            <InputContainer>
            <InputForm>
                <TextField
                  id="outlined-login"
                  name="login"
                  label="Login *"
                  variant="outlined"
                  value={userLogin}
                  type="text"
                  {...register("login", { required: "Login is required." })}
                  error={Boolean(errors.login)}
                  helperText={errors.login?.message}
                  onBlur={() => {
                    clearErrors("login");
                  }}
                  onChange={handleLoginChange}/>
              </InputForm>
              <InputForm>
                <TextField
                  id="outlined-password"
                  name="password"
                  label="Password *"
                  variant="outlined"
                  value={userPassword}
                  type="password"
                  {...register("password", { required: "Password is required." })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  onBlur={() => {
                    clearErrors("password");
                  }}
                  onChange={handlePasswordChange} />
              </InputForm>
            </InputContainer>
            {error && <ApiErrorMessage error={error}/>}
            {!loading ? 
            <StyledForm>
            <StyledButton
              onSubmit={handleSubmit(onSubmit)}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign In
            </StyledButton>
            </StyledForm> : "Loading..."}
            <Messages>
              <p><a href="forgot_password_page.html">Forgot password?</a> </p>
              <p><a href="http://localhost:3000/singup">Don't have an account? Sign Up</a></p>
            </Messages>
          </FormLoginContainer>
      </Container>
    </>
  );
}

export default SingIn;
