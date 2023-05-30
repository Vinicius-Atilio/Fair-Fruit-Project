import React from "react";
import { Container, Info, Details } from './styles';

export const TableRow = ({ items }) => {
  items = [];
  console.log('items: ', items)
  console.log('items: ', items.descriptionProduct)
  return (
    <Container>
      {items.map(item => (
        <>
        <div>
          <h2>ITEM</h2>
          {item.descriptionProduct}
        </div>
        <div>
          <h2>QUANTITY</h2>
          {item.quantity}
        </div>
        <div>
          <h2>UNIT PRICE</h2>
          {item.unitPrice}
        </div>
        </>
      ))}
    </Container>
  );
};