import { Button, StylesProvider } from '@material-ui/core';
import { Container, Title, InputContainer, Styles } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SignUpContext, useSignUpContext } from 'common/contexts/User';
import axios from 'axios';
import {
    Input,
    InputLabel,
    FormControl,
    NativeSelect,
} from '@material-ui/core';

function User() {
    const history = useHistory();

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState(0);

    // const { login, setLogin, password, setPassword, isAdmin, setIsAdmin } =
    //     useContext(SignUpContext);

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
            const response = await axios.post('/api/users/auth', userAuthentication);
            const data = response.data;
            setUserLogin('');
            setUserPassword(0);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Title>Sign In</Title>
            <InputContainer>
                <InputLabel>login</InputLabel>
                <Input
                    value={userLogin}
                    type="text"
                    onChange={handleLoginChange}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>Password</InputLabel>
                <Input
                    value={userPassword}
                    type="password"
                    onChange={handlePasswordChange}
                />
            </InputContainer>
            <form onSubmit={handleSubmit}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={userLogin.length < 4}
                    onClick={() => history.push('/products')}
                >
                    Sign In
                </Button>
            </form>
            <Styles>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Sign Up
                </Button>
            </Styles>
        </Container>
    );
}

export default User;
