import { Container, Title, ImageContainer, InputForm, CustomIcon, 
StyledForm, Image, StyledButton, SignInContainer, InputContainer } from './styles';
import { useState } from 'react';
import axios from 'axios';
import {TextField} from '@material-ui/core';
import Fruit from '../../assets/fruit.png';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from 'react-router';
import FormComponent from 'components/Request';

function SingIn() {
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const history = useHistory();
    const singIn = FormComponent();
    const handleLoginChange = (event) => {
        setUserLogin(event.target.value);
    };

    const falseToken = 'MiJ9.eyJzdWIiOiJ2aW5pIiwiZXhwIjoxNjgxNTExNzkzfQ.eIVUEejwtavVC81o5jRd-sSp8NIP2JkrrzvGAT8GR5OMF2-l35NI8OBWNcWvMvJlW3MfzQIFbbht';

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      singIn(userLogin, userPassword);
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
                  <p><a href="http://localhost:3000/singup">Don't have an account? Sign Up</a></p>
              </SignInContainer>
            </Container>
          </div>
        </>
      );
    }

export default SingIn;
