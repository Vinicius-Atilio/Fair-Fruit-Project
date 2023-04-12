import { Button } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from 'common/contexts/Client';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
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

        const [clientName, setClientName] = useState('');
        const [clientDoc, setClientDoc] = useState(0);
        const [clientBalance, setClientBalance] = useState(0);
    
        // const { login, setLogin, password, setPassword, isAdmin, setIsAdmin } =
        //     useContext(SignUpContext);
    
        const handleNameChange = (event) => {
            setClientName(event.target.value);
        };
    
        const handleDocChange = (event) => {
            setClientDoc(event.target.value);
        };
    
        const handleBalanceChange = (event) => {
            setClientBalance(event.target.value);
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const newUser = {
                name: clientName,
                cpf: clientDoc,
                balance: clientBalance,
            };
            try {
                const response = await axios.post('/api/clients', newUser);
                const data = response.data;
                setClientName('');
                setClientDoc(0);
                setClientBalance(0);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <Container>
            <Title>Insert your name</Title>
            <InputContainer>
                <InputLabel>Name</InputLabel>
                <Input
                    type="text"
                    value={clientName}
                    onChange={handleNameChange}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>CPF</InputLabel>
                <InputMasked
                    mask="999.999.999-99"
                    value={clientDoc}
                    type="text"
                    onChange={handleDocChange}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>Balance</InputLabel>
                <Input
                    value={clientBalance}
                    type="number"
                    onChange={handleBalanceChange}
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                />
            </InputContainer>
            <form onSubmit={handleSubmit}>
                <Button
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