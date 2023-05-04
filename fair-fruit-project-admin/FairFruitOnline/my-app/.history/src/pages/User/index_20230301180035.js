import { Button, StylesProvider } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
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
    const [userType, setUserType] = useState(Boolean);

    const { login, setLogin, password, setPassword, isAdmin, setIsAdmin } =
        useContext(SignUpContext);

        const handleLoginChange = (event) => {
            setUserLogin(event.target.value);
        };
    
        const handlePasswordChange = (event) => {
            setUserPassword(event.target.value);
        };
    
        const handleUserTypeChange = (event) => {
            setUserType(event.target.value);
        };
    
        const handleSubmit = async (event) => {
          event.preventDefault();
          const newUser = {
              login: userLogin,
              password: userPassword,
              admin: userType,
          };
          try {
              const response = await axios.post('/api/users', newUser);
              const data = response.data;
              setUserLogin('');
              setUserPassword(0);
              setUserType(Boolean);
              console.log(data);
          } catch (error) {
              console.log(error);
          }
          // let newAddedProducts;
          // newAddedProducts = newFruit.filter((item) => item.id !== event.id);
          // setNewFruit([...newAddedProducts]);
      };

    return (
        <Container>
            <Title>Sign Up</Title>
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
                    value={password}
                    type="password"
                    onChange={handlePasswordChange}
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
                    onChange={handleUserTypeChange}>
                    <option value={10}>Admin</option>
                    <option value={20}>User</option>
                </NativeSelect>
            </FormControl>
            <form onSubmit={handleSubmit}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={login.length < 4}
                >
                    Next
                </Button>
            </form>
        </Container>
    );
}

export default User;
