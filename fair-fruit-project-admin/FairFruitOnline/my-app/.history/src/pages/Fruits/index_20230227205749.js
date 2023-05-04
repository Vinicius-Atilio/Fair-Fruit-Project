import Fruits from 'components/Fruits';
import { Voltar, Container, Lista } from './styles';
import { useHistory } from 'react-router-dom';
import { CustomCard } from 'pages/FairFruit/styles';
import { useState } from 'react';
import axios from 'axios';

function Fruit() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState('');
  const [products, setProducts] = useState([]);

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
      setProducts([...products, data]);
      setProductName('');
      setProductPrice(0);
      setProductImage('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Voltar onClick={history.goBack} />
      <h2>Fruits</h2>
      <CustomCard>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter product name:
              <input type="text" value={productName} onChange={handleNameChange} required />
            </label>
          </div>
          <div>
            <label>Enter product price:
              <input type="number" value={productPrice} onChange={handlePriceChange} required step="0.01" />
            </label>
          </div>
          <div>
            <label>Enter product image url:
              <input type="text" value={productImage} onChange={handleImageChange} required />
            </label>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </CustomCard>
      <Fruits products={products} />
    </Container>
  );
}

export
 default Fruit;
