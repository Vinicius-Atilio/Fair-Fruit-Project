import { useState, useEffect, memo } from "react";
import axios from "axios";
import { IconButton, Container } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useCartContext } from "../contexts/CartContext";

function Product({ id, name, picture, price, unidade }) {
  const { cart, addProduct, removeProduct } = useCartContext();
  const hasItem = cart.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(hasItem?.quantity || 0);

  const handleAddProduct = () => {
    const product = {
      id,
      name,
      price,
      quantity: 1, // Define uma quantidade padrão como 1
    };

    addProduct(product);
    setQuantity(quantity + 1);
  };

  const handleRemoveProduct = () => {
    removeProduct(id);
    setQuantity(quantity - 1);
  };

  return (
    <Container className="get">
      <div>
        <img
          src={`${picture}`}
          alt={`${name}`}
          width="80"
          height="70"
        />
        <p>
          {name} - $ {price?.toFixed(2)} <span>{unidade}</span>
        </p>
      </div>
      <div>
        <IconButton
          onClick={handleRemoveProduct}
          disabled={!hasItem || quantity === 0}
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        {quantity}
        <IconButton
          onClick={handleAddProduct}
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Product);