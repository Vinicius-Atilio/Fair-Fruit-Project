import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useFruitsContext } from 'common/contexts/Fruits';

function Fruits({ name, picture, id, price, unidade }) {
    const { shopping, addFruit } = useFruitsContext();
    return (
        <Container>
            <div>
                <img
                    src={`/assets/${picture}.png`}
                    alt={`picture de ${name}`}
                />
                <p>
                    {name} - $ {price?.toFixed(2)} <span>Kg</span>
                </p>
            </div>
            <div>
                <IconButton
                    onClick={() =>
                        addFruit({
                            name,
                            picture,
                            id,
                            price,
                            unidade,
                        })
                    }
                    color="primary"
                >
                    <AddIcon />
                </IconButton>
            </div>
        </Container>
    );
}

export default memo(Fruits);
