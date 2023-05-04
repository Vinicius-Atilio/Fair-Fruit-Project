import Fruits from 'components/Fruits';
import { Voltar, Container, Lista } from './styles';
import { useHistory } from 'react-router-dom';

function Fruit() {
    const history = useHistory();
    return (
        <Container>
            <Voltar onClick={history.goBack} />
            <Lista>
                <h2>Fruits</h2>
                    <Fruits />
            </Lista>
        </Container>
    );
}

export default Fruit;
