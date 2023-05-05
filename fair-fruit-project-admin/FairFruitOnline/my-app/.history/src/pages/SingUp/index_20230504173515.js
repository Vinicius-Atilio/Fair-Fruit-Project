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
                <StyledForm onSubmit={handleSubmit}>
                <InputContainer>
                <InputForm>
                    <TextField
                    id="outlined-basic"
                    name="name"
                    label="Name *"
                    variant="outlined"
                    type="text"
                    {...register("name", { required: "Name is required." })}
                    error={Boolean(errors.name)}
                    helperText={errors.login?.message}/>
                </InputForm>
                <InputForm>
                    <InputMasked
                        mask="999.999.999-99"
                        id="outlined-basic"
                        label="CPF *"
                        variant="outlined"
                        type="text"
                        {...register("name", { required: "Name is required." })}
                        error={Boolean(errors.name)}
                        helperText={errors.login?.message}/>
                </InputForm>
                </InputContainer>
                <InputContainer>
                <InputForm>
                    <InputMasked
                        mask="99-99-9999"
                        id="outlined-basic"
                        label="Birth Date (dd-MM-yyyy)*"
                        variant="outlined"
                        type="text"/>
                </InputForm>
                <InputForm fullWidth>
                    <InputLabel id="demo-simple-select-label"> Type </InputLabel>
                    <Select
                        labelId="demo-simple-select"
                        id="demo-simple-select"
                        defaultValue={false}
                        label="Type">
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
                        type="text"/>
                </ExtraInputForm>
                </InputContainer>
                <InputContainer>
                <InputForm>
                    <TextField
                            id="outlined-basic"
                            label="Login *"
                            variant="outlined"
                            type="text"/>
                </InputForm>
                <InputForm>
                    <TextField
                        id="outlined-basic"
                        label="Password *"
                        variant="outlined"
                        type="password"/>
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
                            type="number"/>
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
