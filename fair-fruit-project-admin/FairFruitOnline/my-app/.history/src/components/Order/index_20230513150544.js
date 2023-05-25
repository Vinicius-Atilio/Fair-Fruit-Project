import { Container } from './styles';
import { memo} from 'react';
import { useCartContext } from 'common/contexts/Cart';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';


function Product({
    id,
    name,
    image,
    price,
}) {

    const { cart, addProduct, removeProduct, totalValue, balance } = useCartContext();

    const handleAddProduct = (product) => {
        console.log(product);
        addProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    return (
        <Container className="get" key={id}>
            <div>
                <img
                    src={`${image}`}
                    alt={`${name}`}
                    width="80" height="70"
                />
                <p>
                    {name} - $ {price?.toFixed(2)} <span>Kg</span>
                </p>
            </div>
            <div>
                <IconButton
                    // disabled={cart.find((item) => item.id === product.id) === 0}
                    onClick={() => removeProduct(id)}
                    color="secondary"
                >
                    <RemoveIcon />
                </IconButton>
                {cart.find((item) => item.id === id)?.quantity || 0}
                <IconButton
                // disabled={totalValue > balance}
                    onClick={() => handleAddProduct({
                        id,
                        name,
                        image,
                        price,})}
                    color="primary"
                >
                    <AddIcon />
                </IconButton>
            </div>
        </Container>
    );
}

export default memo(Product);