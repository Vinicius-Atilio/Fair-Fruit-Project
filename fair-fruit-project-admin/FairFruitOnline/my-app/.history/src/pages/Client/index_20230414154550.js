import { Button } from '@material-ui/core';
import { Container, Title, InputContainer, InputForm } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from 'common/contexts/Client';
import { Input, InputLabel, InputAdornment, FormControl,
    NativeSelect, } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import InputMask from 'react-input-mask';
import axios from 'axios';

const InputMasked = (props) => (
    <InputMask
        maskChar=""
        mask={props.mask}
        value={props.value}
        onChange={props.onChange}
    >
        {(inputProps) => <Input {...inputProps} />}
    </InputMask>
);

function Client() {
    const history = useHistory();
    const { name, setName, cpf, setCpf, balance, setBalance } =
        useContext(UserContext);

    const [userType, setUserType] = useState(Boolean);
    const [clientName, setClientName] = useState('');
    const [clientDoc, setClientDoc] = useState(0);
    const [clientBalance, setClientBalance] = useState(0);
    
    const handleNameChange = (event) => {
        setClientName(event.target.value);
    };

    const handleDocChange = (event) => {
        setClientDoc(event.target.value);
    };

    const handleBalanceChange = (event) => {
        setClientBalance(event.target.value);
    };

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };


    const handleSubmit = async (event) => {
        console.log("chamando handdlesubmit");
        event.preventDefault();
        const newUser = {
            name: clientName,
            cpf: clientDoc,
            balance: clientBalance,
            admin: userType,
        };
        try {
            const response = await axios.post('/api/clients', newUser);
            const data = response.data;
            setClientName('');
            setClientDoc(0);
            setClientBalance(0);
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
                value={clientName}
                type="text"
                onChange={handleNameChange} />
            </InputForm>
            <InputForm>
                <TextField
                    id="outlined-basic"
                    label="CPF *"
                    variant="outlined"
                    value={clientDoc}
                    type="text"
                    onChange={handleNameChange} />
            </InputForm>

                <InputLabel>CPF</InputLabel>
                <InputMasked
                    mask="999.999.999-99"
                    value={clientDoc}
                    type="number"
                    onChange={handleDocChange}
                />
            </InputContainer>
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
            <InputContainer>
                <InputLabel>Balance</InputLabel>
                <Input
                    type="number"
                    value={clientBalance}
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
                    disabled={clientName.length < 4}
                    // onClick={() => history.push('/products')}
                >
                    Next
                </Button>
            </form>
        </Container>
    );
}

export default Client;
