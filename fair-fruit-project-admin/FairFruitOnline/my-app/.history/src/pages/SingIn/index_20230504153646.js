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
  const {register, handleSubmit, watch, formState: {errors}, clearErrors, setValue} = useForm();
  const {loading} = useSelector((state => state.auth));
  const history = useHistory();
  const dispath = useDispatch();
  

  const handleLoginChange = (event) => {
    console.log("handleLoginChange");
    console.log(event.target.value);
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

    console.log(userAuthentication);


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
            {!loading ? 
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <InputForm>
                <TextField
                  id="outlined-login"
                  name="outlinedLogin"
                  label="Login *"
                  variant="outlined"
                  type="text"
                  {...register("outlinedLogin", { required: "Login is required." })}
                  error={Boolean(errors.outlinedLogin)}
                  helperText={errors.outlinedLogin?.message}
                  value={userLogin}
                  onChange={handleLoginChange}/>
              </InputForm>
              <InputForm>
                <TextField
                  id="outlined-password"
                  name="outlinedPassword"
                  label="Password *"
                  variant="outlined"
                  type="password"
                  onChange={handlePasswordChange}
                  {...register("outlinedPassword", { required: "Password is required." })}
                  error={Boolean(errors.outlinedPassword)}
                  helperText={errors.outlinedPassword?.message}/>
              </InputForm>
            {error && <ApiErrorMessage error={error}/>}
            <StyledButton
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
            </InputContainer>
          </FormLoginContainer>
      </Container>
    </>
  );
}

export default SingIn;
