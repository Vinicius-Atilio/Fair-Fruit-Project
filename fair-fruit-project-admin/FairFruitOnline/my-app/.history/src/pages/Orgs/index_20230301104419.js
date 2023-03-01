import Fruits from 'components/Fruits';
import { Voltar, Container, Lista } from './styles';
import { useHistory } from 'react-router-dom';
import { CustomCard } from 'pages/FairFruit/styles';
import { useCartContext } from 'common/contexts/Cart';
import { useFruitsContext } from 'common/contexts/Fruits';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';

function Orgs() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState('');
  const { cart, addProduct, removeProduct, totalValue, balance } = useCartContext();
  const { addedProducts, setAddedProducts } = useFruitsContext();
  const [fruits, setFruits] = useState([]);

  const history = useHistory();

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  }

  const handlePriceChange = (event) => {
    setProductPrice(event.target.value);
  }

  const handleImageChange = (event) => {
    setProductImage(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      image: productImage
    };
    try {
      const response = await axios.post('/api/products', newProduct);
      const data = response.data;
      setFruits([...fruits, data]);
      setProductName('');
      setProductPrice(0);
      setProductImage('');
    } catch (error) {
      console.log(error);
    }
    let newAddedProducts;
    newAddedProducts = cart.filter((item) => item.id !== event.id);
    setAddedProducts([...newAddedProducts]);
  }

  return (
    <Container>
      <Voltar onClick={history.goBack} />
      <h2>Fruits</h2>
      <CustomCard>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>
              <h3>Enter product name</h3>
              <input type="text" value={productName} onChange={handleNameChange} required />
            </label> */}
            <TextField
              label="Name"
              id="filled-start-adornment"
              sx={{ m: 1}}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
              variant="filled"
          />
          </div>
          <div>
            {/* <label>
              <h3>Enter product price</h3>
              <input type="number" value={productPrice} onChange={handlePriceChange} required step="0.01" />
            </label> */}
          <TextField
              label="Price KG"
              id="filled-start-adornment"
              sx={{ m: 1}}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
              variant="filled"
          />
          </div>
          <div>
            {/* <label>
              <h3>Enter product image url</h3>
              <input type="text" value={productImage} onChange={handleImageChange} required />
            </label> */}
          <TextField
            error
            id="outlined-error"
            label="Image URL"
            id="filled-start-adornment"
            sx={{ m: 1}}
            InputProps={{
              startAdornment:
              <InputAdornment position="start" type="text" value={productImage} onChange={handleImageChange} required>
              </InputAdornment>,
            }}
            variant="filled"
          />
          </div>
          <Button variant="contained" endIcon={<SendIcon />} color="primary">
            Add
          </Button>
        </form>
      </CustomCard>
      <Fruits fruits={fruits} setFruits={setFruits} />
    </Container>
    
    );
}

export default Orgs;
