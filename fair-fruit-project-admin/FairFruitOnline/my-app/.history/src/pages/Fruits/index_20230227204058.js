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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                    <Fruits />
            </Lista>
        </Container>
    );
}

export default Fruit;
