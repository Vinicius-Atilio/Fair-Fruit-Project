import { Button } from '@material-ui/core';
import { Container, Title, InputContainer, InputForm, ExtraInputForm, StyledForm, CustomIcon } from './styles';
import { useHistory } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { LoginContext } from 'common/contexts/Login';
import { Input, InputLabel, InputAdornment, FormControl,
    Select, MenuItem } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import InputMasked from '../../components/InputMasked/index.js';
import LockIcon from '@mui/icons-material/Lock';
import ApiService from '../../service/apiService.js';
import { register, resetRegister } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import { RegisterContext } from 'common/contexts/Register';


function SingUp() {
    const {userType, setUserType, userName, setUserName, userDoc,
         setUserDoc, userBirthDate, setUserBirthDate, userBalance,
         setUserBalance, userEmail, setUserEmail, userLogin,
         setUserLogin, userPassword, setUserPassword} = useContext(RegisterContext);
    const dispath = useDispatch();

    const history = useHistory();
    
    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleDocChange = (event) => {
        setUserDoc(event.target.value);
    };
    
    const handleBirthDateChange = (event) => {
        setUserBirthDate(event.target.value);
    };

    const handleUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handleUserLoginChange = (event) => {
        setUserLogin(event.target.value);
    };

    const handleUserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const handleBalanceChange = (event) => {
        setUserBalance(event.target.value);
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleSubmit = async (event) => {
        console.log("chamando handdlesubmit");
        event.preventDefault();
        const newUser = {
            name: userName,
            cpf: userDoc,
            birthDate: userBirthDate,
            email: userEmail,
            login: userLogin,
            password: userPassword,
            balance: userBalance,
            admin: userType,
        };
        try {
            dispath(register(newUser));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispath(resetRegister());
      }, [dispath])    

    return (
        <Container>
            <CustomIcon>
                <LockIcon />
            </CustomIcon>
            <Title>Sign Up</Title>
            <InputContainer>
            <InputForm>
                <TextField
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                value={userName}
                type="text"
                onChange={handleNameChange} />
            </InputForm>
            <InputForm>
                <InputMasked
                    mask="999.999.999-99"
                    id="outlined-basic"
                    label="CPF *"
                    variant="outlined"
                    value={userDoc}
                    type="text"
                    onChange={handleDocChange}
                />
            </InputForm>
            </InputContainer>
            <InputContainer>
            <InputForm>
                <InputMasked
                    mask="99-99-9999"
                    id="outlined-basic"
                    label="Birth Date (dd-MM-yyyy)*"
                    variant="outlined"
                    value={userBirthDate}
                    type="text"
                    onChange={handleBirthDateChange} />
            </InputForm>
            <InputForm fullWidth>
                <InputLabel id="demo-simple-select-label"> Type </InputLabel>
                <Select
                    labelId="demo-simple-select"
                    id="demo-simple-select"
                    defaultValue={false}
                    label="Type"
                    value={userType}
                    onChange={handleUserTypeChange}
                >
                    <MenuItem value={false}>User</MenuItem>
                    <MenuItem value={true}>Admin</MenuItem>
                </Select>
            </InputForm>
            </InputContainer>
            <InputContainer>
            <ExtraInputForm>
                <TextField
                    id="outlined-basic"
                    label="Email *"
                    variant="outlined"
                    value={userEmail}
                    type="text"
                    onChange={handleUserEmailChange} />
            </ExtraInputForm>
            </InputContainer>
            <InputContainer>
            <InputForm>
                <TextField
                        id="outlined-basic"
                        label="Login *"
                        variant="outlined"
                        value={userLogin}
                        type="text"
                        onChange={handleUserLoginChange} />
            </InputForm>
            <InputForm>
                <TextField
                    id="outlined-basic"
                    label="Password *"
                    variant="outlined"
                    value={userPassword}
                    type="password"
                    onChange={handleUserPasswordChange} />
            </InputForm>
            </InputContainer>
            <InputContainer>
            <ExtraInputForm>
                <TextField
                        id="outlined-basic"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $$
                              </InputAdornment>
                            ),
                          }}
                        label="Balance *"
                        variant="outlined"
                        value={userBalance}
                        type="number"
                        onChange={handleBalanceChange} />
            </ExtraInputForm>
            
            </InputContainer>
            <StyledForm onSubmit={handleSubmit}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={userName.length < 4}
                    onClick={() => history.push('/')}
                >
                    Sign Up
                </Button>
                <p><a href="http://localhost:3000/">Already have an account? Sign in</a></p>
            </StyledForm>
        </Container>
    );
}

export default SingUp;
