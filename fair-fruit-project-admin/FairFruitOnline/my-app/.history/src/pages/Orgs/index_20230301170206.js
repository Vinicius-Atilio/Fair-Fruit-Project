import Fruits from 'components/Fruits';
import { Voltar, Container, Lista, CustomCard } from './styles';
import { useHistory } from 'react-router-dom';
import { useCartContext } from 'common/contexts/Cart';
import { useFruitsContext } from 'common/contexts/Fruits';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

function Orgs() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductImage] = useState('');
    const { cart, addProduct, removeProduct, totalValue, balance } =
        useCartContext();
    const { addedProducts, setAddedProducts } = useFruitsContext();
    const [fruits, setFruits] = useState([]);

    const history = useHistory();

    const handleNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleImageChange = (event) => {
        setProductImage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newProduct = {
            name: productName,
            price: productPrice,
            image: productImage,
        };
        try {
            const response = await axios.post('/api/products', newProduct);
            const data = response.data;
            setFruits([...fruits, data]);
            setProductName('');
            setProductPrice(0);
            setProductImage('');
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        addedProducts = cart.filter((item) => item.id !== event.id);
        setAddedProducts([...addedProducts]);
    };

    return (
        <Container>
            <Voltar onClick={history.goBack} />
            <h2>Fruits</h2>
            <CustomCard>
                <div>
                    <TextField
                        label="Name"
                        id="filled-start-adornment"
                        sx={{ m: 1 }}
                        type="text"
                        value={productName}
                        onChange={handleNameChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"></InputAdornment>
                            ),
                        }}
                        variant="filled"
                    />
                    <TextField
                        label="Price KG"
                        id="filled-start-adornment"
                        sx={{ m: 1 }}
                        value={productPrice}
                        onChange={handlePriceChange}
                        required
                        step="0.01"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"></InputAdornment>
                            ),
                        }}
                        variant="filled"
                    />
                    <TextField
                        label="Image URL"
                        id="filled-start-adornment"
                        sx={{ m: 1 }}
                        type="text"
                        value={productImage}
                        onChange={handleImageChange}
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"></InputAdornment>
                            ),
                        }}
                        variant="filled"
                    />
                    <img
                        className="image-container"
                        src={productImage}
                        alt="Preview o the product image"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                        color="primary"
                    >
                        Add
                    </Button>
                </form>
            </CustomCard>
            <Fruits fruits={fruits} setFruits={setFruits} />
        </Container>
    );
}

export default Orgs;
