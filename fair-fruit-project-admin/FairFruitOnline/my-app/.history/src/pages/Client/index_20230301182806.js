import { Button } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from 'common/contexts/Client';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import InputMask from 'react-input-mask';

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
    
        const handleLoginChange = (event) => {
            setClientName(event.target.value);
        };
    
        const handlePasswordChange = (event) => {
            setClientDoc(event.target.value);
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
        };

    return (
        <Container>
            <Title>Insert your name</Title>
            <InputContainer>
                <InputLabel>Name</InputLabel>
                <Input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>CPF</InputLabel>
                <InputMasked
                    mask="999.999.999-99"
                    value={cpf}
                    type="text"
                    onChange={(event) => setCpf(Number(event.target.value))}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>Balance</InputLabel>
                <Input
                    value={balance}
                    type="number"
                    onChange={(event) => setBalance(Number(event.target.value))}
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                />
            </InputContainer>
            <Button
                variant="contained"
                color="primary"
                disabled={name.length < 4}
                onClick={() => history.push('/products')}
            >
                Next
            </Button>
        </Container>
    );
}

export default Client;
