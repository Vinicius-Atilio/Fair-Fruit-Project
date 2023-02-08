import { Button } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
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
