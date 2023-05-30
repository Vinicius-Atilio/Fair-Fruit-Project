import { Voltar, InputContainer, CustomCard, Container } from './styles';
import { useHistory } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import configAxios from "utils/config";
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function Orgs() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductImage] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [updatedProducts, setUpdatedProducts] = useState([]);

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

    const getProducts = async () => {
        try {
          const data = await configAxios.get("/api/products");
          setProducts(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

    const deleteProduct = async (productId) => {
        console.log(productId);
        setIsLoading(true);
    try {
        const response = await configAxios.del(`/api/products/${productId}`);
        console.log(`Product with id ${productId} has been deleted.`);
        // filter out the deleted product from the products list
        const updated = products.filter((product) => product.id !== productId);
        setUpdatedProducts(updated);
    } catch (error) {
        console.log(error);
    }
        setIsLoading(false);
    };

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const newProduct = {
            name: productName,
            price: productPrice,
            image: productImage,
        };
      try {
          const response = await configAxios.post('/api/products', newProduct);
          const data = response.data;
          setProducts([...products, data]); // add new fruit to the state
      } catch (error) {
          console.log(error);
      }
      setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [updatedProducts]);
  

    return (
        <InputContainer>
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
            <>
                {products.length === 0 ? ( <p>Insert a new Product!</p> ) : 
                ( isLoading ? <CircularProgress color="success"/> :
                products.map((product) => (
                    <Container className="get" key={product.id}>
                    <div>
                        <img
                        src={`${product.image}`}
                        alt={`${product.name}`}
                        width="80"
                        height="70"
                        />
                        <p>
                        {product.name} - $ {product.price?.toFixed(2)} <span>Kg</span>
                        </p>
                    </div>
                    <div>
                        <IconButton onClick={() => deleteProduct(product.id)} color="primary">
                        <DeleteForeverIcon />
                        </IconButton>
                    </div>
                    </Container>
                ))
                )}
            </>
        </InputContainer>
    );
}

export default Orgs;
