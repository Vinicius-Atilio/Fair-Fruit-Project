import { Button } from '@material-ui/core';
import { Container, Title, InputContainer, InputForm, ExtraInputForm, StyledForm, CustomIcon } from './styles';
import { useHistory } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { LoginContext } from 'common/contexts/Login';
import { Input, InputLabel, InputAdornment, FormControl,
    Select, MenuItem } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import LockIcon from '@mui/icons-material/Lock';
import ApiService from '../../service/apiService.js';
import { registerUser, resetRegister } from 'slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import { UserContext } from 'common/contexts/Register';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';


function SingUp() {
    const {userType, setUserType, userName, setUserName, userDoc,
         setUserDoc, userBirthDate, setUserBirthDate, userBalance,
         setUserBalance, userEmail, setUserEmail, userLogin,
         setUserLogin, userPassword, setUserPassword} = useContext(UserContext);
    const dispath = useDispatch();
    const {register, handleSubmit, formState: {errors}, clearErrors} = useForm();
    const {loading} = useSelector((state => state.auth));

    const history = useHistory();


    const onSubmit = async (data) => {
        const newUser = {
            name: data.name,
            cpf: data.cpf,
            birthDate: data.birthDate,
            email: data.email,
            login: data.login,
            password: data.password,
            balance: data.balance,
            admin: data.type,
        };
        console.log(newUser);
        try {
            dispath(registerUser(newUser));
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
            {!loading ? 
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                <InputForm>
                    <TextField
                    id="outlined-name"
                    name="name"
                    label="Name *"
                    variant="outlined"
                    type="text"
                    {...register("name", { required: "Name is required." })}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}/>
                </InputForm>
                <InputForm>
                    <InputMask
                        mask="999.999.999-99" maskChar=""
                        id="outlined-cpf"
                        variant="outlined"
                        type="text"
                        {...register("cpf", { required: "A valid Cpf is required." })}
                        error={Boolean(errors.cpf)}
                        helperText={errors.cpf?.message}>
                            {(props) => <TextField 
                                    variant="outlined"
                                    name="cpf"
                                    label="CPF *"
                                    error={props.error}
                                    helperText={props.helperText}/>}
                    </InputMask>
                </InputForm>
                </InputContainer>
                <InputContainer>
                <InputForm>
                    <InputMask
                        mask="99-99-9999" maskChar=""
                        id="outlined-birthDate"
                        variant="outlined"
                        type="text"
                        {...register("birthDate", { required: "Birth Date is required." })}
                        error={Boolean(errors.birthDate)}
                        helperText={errors.birthDate?.message}>
                            {(props) => <TextField 
                                    variant="outlined"
                                    name="birthDate"
                                    label="Birth Date (dd-MM-yyyy)*"
                                    error={props.error}
                                    helperText={props.helperText}/>}
                    </InputMask>
                </InputForm>
                <InputForm fullWidth>
                    <InputLabel id="demo-simple-select-label"> Type </InputLabel>
                    <Select
                        id="demo-simple-select"
                        name="type"
                        labelId="demo-simple-select"
                        defaultValue={false}
                        label="Type"
                        {...register("type")}>
                        <MenuItem value={false}>User</MenuItem>
                        <MenuItem value={true}>Admin</MenuItem>
                    </Select>
                </InputForm>
                </InputContainer>
                <InputContainer>
                <ExtraInputForm>
                    <TextField
                        id="outlined-email"
                        name="email"
                        label="E-mail *"
                        variant="outlined"
                        type="text"
                        {...register("email", { required: "E-mail is required." })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}/>
                </ExtraInputForm>
                </InputContainer>
                <InputContainer>
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
                </InputContainer>
                <InputContainer>
                <ExtraInputForm>
                    <TextField
                        id="outlined-balance"
                        name="balance"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                $$
                            </InputAdornment>
                            ),
                        }}
                        label="Balance *"
                        variant="outlined"
                        defaultValue={0}
                        type="decimal"
                        {...register("balance")}/>
                </ExtraInputForm>
                </InputContainer>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // onClick={() => history.push('/')}
                >
                    Sign Up
                </Button>
            </StyledForm> : "...Loading"}
            <p><a href="http://localhost:3000/">Already have an account? Sign in</a></p>
        </Container>
    );
}

export default SingUp;
