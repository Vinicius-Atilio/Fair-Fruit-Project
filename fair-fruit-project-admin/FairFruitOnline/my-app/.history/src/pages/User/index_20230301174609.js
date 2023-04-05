import { Button, StylesProvider } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SignUpContext, useSignUpContext } from 'common/contexts/User';
import {
    Input,
    InputLabel,
    FormControl,
    NativeSelect,
} from '@material-ui/core';

function User() {
    const history = useHistory();

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setuserPassword] = useState(0);
    const [userType, setUserType] = useState(Boolean);

    const { login, setLogin, password, setPassword, isAdmin, setIsAdmin } =
        useContext(SignUpContext);

    return (
        <Container>
            <Title>Sign Up</Title>
            <InputContainer>
                <InputLabel>login</InputLabel>
                <Input
                    value={login}
                    type="text"
                    onChange={(event) => setLogin(event.target.value)}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>Password</InputLabel>
                <Input
                    value={password}
                    type="password"
                    onChange={(event) =>
                        setPassword(Number(event.target.value))
                    }
                />
            </InputContainer>

            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Type
                </InputLabel>
                <NativeSelect
                    defaultValue={20}
                    inputProps={{
                        login: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Admin</option>
                    <option value={20}>User</option>
                </NativeSelect>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                disabled={login.length < 4}
                onClick={() => {}}
            >
                Next
            </Button>
        </Container>
    );
}

export default User;
