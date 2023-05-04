import Fruits from 'components/Fruits';
import { Voltar, Container, Lista } from './styles';
import { useHistory } from 'react-router-dom';
import { CustomCard } from 'pages/FairFruit/styles';

function Fruit() {
    const history = useHistory();
    return (
        <Container>
            <Voltar onClick={history.goBack} />
            <CustomCard>
                
            </CustomCard>
                <h2>Fruits</h2>
                    <Fruits />

        </Container>
    );
}

export default Fruit;
