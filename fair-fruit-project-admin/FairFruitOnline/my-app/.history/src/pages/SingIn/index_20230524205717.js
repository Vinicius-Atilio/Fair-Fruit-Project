import { Container, FormLoginContainer, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, InputContainer, Messages, ErrorContainer, ButtonContainer } from './styles';
import { useState, useEffect, useContext } from 'react';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import { LoginContext, useAuthContext } from 'common/contexts/Login';
import { login, resetLogin } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import ApiErrorMessage from 'components/Message';
import { ErrorContext } from 'common/contexts/Error';
import { useForm } from 'react-hook-form';
import { TextField} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import configAxios from 'utils/config';
import { UserContext } from 'common/contexts/Register';

function SingIn() {
  // const {userLogin, setUserLogin, userPassword, setUserPassword} =  useContext(LoginContext);
  const {setUserId, userType, setUserType, userName, setUserName, userDoc,
    setUserDoc, userBirthDate, setUserBirthDate, userBalance,
    setUserBalance, userEmail, setUserEmail, userLogin,
    setUserLogin, userPassword, setUserPassword} = useContext(UserContext);
  const {error, setError} = useContext(ErrorContext);
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {loading} = useSelector((state => state.auth));
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispath = useDispatch();
  

  const onSubmit = async (data) => {
    setIsLoading(true);
    const userAuthentication = {
      login: data.login,
      password: data.password,
    };

    const res = await dispath(login(userAuthentication));
    console.log(res);
    if (res.payload.token) {
      const user = await configAxios.get(`/api/users/${res.payload.id}`);
      // localStorage.setItem('user', user);
      setUserId(user.id);
      setUserName(user.name);
      setUserDoc(user.cpf);
      setUserBirthDate(user.birthDate);
      setUserEmail(user.email);
      setUserLogin(user.login);
      setUserBalance(user.balance);
      setUserType(user.admin);
      setIsLoading(false);
      setError();
      history.push("/product");
    } else {
      setError(res.payload);
      setIsLoading(false);
    }

    console.log("state:" + userName);
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
              {isLoading ? 
              <CircularProgress color="success"/> :
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                  <InputForm>
                    <TextField
                      id="outlined-login"
                      name="login"
                      label="Login *"
                      variant="outlined"
                      type="text"
                      {...register("login", { required: "Login is required." })}
                      error={Boolean(errors.login)}
                      helperText={errors.login?.message}/>
                  </InputForm>
                  <InputForm>
                    <TextField
                      id="outlined-password"
                      name="password"
                      label="Password *"
                      variant="outlined"
                      type="password"
                      {...register("password", { required: "Password is required." })}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}/>
                  </InputForm>
                  <ErrorContainer>
                    {error && <ApiErrorMessage error={error}/>}
                  </ErrorContainer>
                  <ButtonContainer>
                    <StyledButton
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Sign In
                    </StyledButton>
                  </ButtonContainer>
                </StyledForm>
              }
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
