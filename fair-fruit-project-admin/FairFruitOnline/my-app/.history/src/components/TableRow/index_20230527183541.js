import React from "react";
import { Container, Info, Details } from './styles';
import { useState } from "react";

export const TableRow = ({ items }) => {
  const it = useState(items);
  console.log('it: ', it)
  console.log('items: ', items.descriptionProduct)
  return (
    <Container>
      {it.map(item => (
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