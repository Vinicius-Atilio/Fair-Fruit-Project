import { Container } from './styles';
import { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ApiService from 'service/apiService';

function Fruits({ updateFruit }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await ApiService.get("/api/products");
      const data = response.data;
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await ApiService.delete(`/api/products/${productId}`);
      console.log(`Product with id ${productId} has been deleted.`);
      // filter out the deleted product from the products list
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [updateFruit]);

  return (
    <>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
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
  );
}

export default memo(Fruits);