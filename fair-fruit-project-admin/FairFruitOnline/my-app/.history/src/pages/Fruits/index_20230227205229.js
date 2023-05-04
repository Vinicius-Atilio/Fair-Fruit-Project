import Fruits from 'components/Fruits';
import { Voltar, Container, Lista } from './styles';
import { useHistory } from 'react-router-dom';
import { CustomCard } from 'pages/FairFruit/styles';

function Fruit() {
    const history = useHistory();
    return (
        <Container>
            <Voltar onClick={history.goBack} />
                <h2>Fruits</h2>
                    <CustomCard>
                        <form>
                            <label>Enter product name:
                                <input type="text" />
                            </label>
                            <label>Enter product price:
                                <input type="float" />
                            </label>
                        </form>
                    </CustomCard>
                    <Fruits />

        </Container>
    );
}

export default Fruit;
