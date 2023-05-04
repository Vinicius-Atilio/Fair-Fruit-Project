import { Button } from '@material-ui/core';
import { Container, Title, InputContainer, InputForm } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from 'common/contexts/Client';
import { Input, InputLabel, InputAdornment, FormControl,
    NativeSelect, } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import InputMasked from '../../components/InputMasked/index.js';
import { useRef } from 'react';


function Client() {
    const [userType, setUserType] = useState(Boolean);
    const [userName, setUserName] = useState('');
    const [userDoc, setUserDoc] = useState('');
    const [userBirthDate, setUserBirthDate] = useState('');
    const [userBalance, setUserBalance] = useState(0);
    const docRef = useRef(null);
    
    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleDocChange = (event) => {
        setUserDoc(event.target.value);
    };
    
    const handleBirthDateChange = (event) => {
        setUserBirthDate(event.target.value);
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
            cpf: docRef.current.value,
            balance: userBalance,
            birthDate: userBirthDate,
            admin: userType,
        };
        try {
            const response = await axios.post('/api/clients', newUser);
            const data = response.data;
            setUserName('');
            setUserDoc(0);
            setUserBalance(0);
            setUserType(Boolean);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Title>Create your account</Title>
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
                {/* <InputMasked
                    mask="999.999.999-99"
                    id="outlined-basic"
                    label="CPF *"
                    variant="outlined"
                    value={userDoc}
                    type="text"
                    onChange={handleDocChange}
                    inputRef={docRef}
                /> */}
            </InputForm>
            <InputForm>
                <TextField
                    id="outlined-basic"
                    label="Birth Date *"
                    variant="outlined"
                    value={userBirthDate}
                    type="text"
                    onChange={handleBirthDateChange} />
            </InputForm>

            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Type
                </InputLabel>
                <NativeSelect
                    defaultValue={false}
                    inputProps={{
                        login: 'age',
                        id: 'uncontrolled-native',
                    }}
                    value={userType}
                    onChange={handleUserTypeChange}
                >
                    <option value={false}>User</option>
                    <option value={true}>Admin</option>
                </NativeSelect>
            </FormControl>

                <InputLabel>Balance</InputLabel>
                <Input
                    type="number"
                    value={userBalance}
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    onChange={handleBalanceChange}
                />
            </InputContainer>
            <form onSubmit={handleSubmit}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={userName.length < 4}
                    // onClick={() => history.push('/products')}
                >
                    Next
                </Button>
            </form>
        </Container>
    );
}

export default Client;
