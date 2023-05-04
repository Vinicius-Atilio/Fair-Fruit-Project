import Fruits from 'components/Fruits';
import { Voltar, Container, Lista } from './styles';
import { useHistory } from 'react-router-dom';
import { CustomCard, InputContainer } from 'pages/FairFruit/styles';
import { useCartContext } from 'common/contexts/Cart';
import { useFruitsContext } from 'common/contexts/Fruits';
import { useState } from 'react';
import axios from 'axios';

function Fruit() {
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
            <label>
              <h3>Enter product name</h3>
              <InputContainer type="text" value={productName} onChange={handleNameChange} required />
            </label>
          </div>
          <div>
            <label>
              Enter product price:
              <input type="number" value={productPrice} onChange={handlePriceChange} required step="0.01" />
            </label>
          </div>
          <div>
            <label>
              Enter product image url:
              <input type="text" value={productImage} onChange={handleImageChange} required />
            </label>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </CustomCard>
      <Fruits fruits={fruits} setFruits={setFruits} />
    </Container>
    
    );
}

export default Fruit;
