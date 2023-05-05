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
import { useForm } from 'react-hook-form';


function SingUp() {
    const {userType, setUserType, userName, setUserName, userDoc,
         setUserDoc, userBirthDate, setUserBirthDate, userBalance,
         setUserBalance, userEmail, setUserEmail, userLogin,
         setUserLogin, userPassword, setUserPassword} = useContext(RegisterContext);
    const dispath = useDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {loading} = useSelector((state => state.auth));

    const history = useHistory();
    
    const onSubmit = async (data) => {
        console.log(data);
        console.log("chamando handdlesubmit");
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
                    <InputMasked
                        mask="999.999.999-99"
                        id="outlined-cpf"
                        name="cpf"
                        label="CPF *"
                        variant="outlined"
                        type="text"
                        {...register("cpf", { required: "A valid Cpf is required." })}
                        error={Boolean(errors.cpf)}
                        helperText={errors.cpf?.message}/>
                </InputForm>
                </InputContainer>
                <InputContainer>
                <InputForm>
                    <InputMasked
                        id="outlined-birthDate"
                        name="birthDate"
                        mask="99-99-9999"
                        label="Birth Date (dd-MM-yyyy)*"
                        variant="outlined"
                        type="text"
                        {...register("birthDate", { required: "Birth Date is required." })}
                        error={Boolean(errors.birthDate)}
                        helperText={errors.birthDate?.message}/>
                </InputForm>
                <InputForm fullWidth>
                    <InputLabel id="demo-simple-select-label"> Type </InputLabel>
                    <Select
                        id="demo-simple-select"
                        name="isAdmin"
                        labelId="demo-simple-select"
                        defaultValue={false}
                        label="Type"
                        {...register("isAdmin")}>
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
                        type="number"
                        {...register("balance")}/>
                </ExtraInputForm>
                </InputContainer>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={userName.length < 4}
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
