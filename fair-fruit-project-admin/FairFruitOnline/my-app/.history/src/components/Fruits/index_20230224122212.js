import { Container } from './styles';
import { memo, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useFruitsContext } from 'common/contexts/Fruits';

function Fruits({ name, picture, id, price, unidade }) {
    const [products, setProduct] = useState([]);
    const { shopping, addFruit } = useFruitsContext();

    const getProducts = async () => {
        try {
            const response = await axios.get("/api/products");
            const data = response.data;
            setProduct(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

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
