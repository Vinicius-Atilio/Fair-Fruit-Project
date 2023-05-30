import React from "react";
import { Container, Info, Details } from './styles';

export const TableRow = ({ items }) => {
  return (
    <Container>
      <div>
        <h2>ITEM</h2>
        {items.descriptionProduct}
      </div>
      <div>
        <h2>QUANTITY</h2>
        {items.quantity}
      </div>
      <div>
        <h2>UNIT PRICE</h2>
        {items.unitPrice}
      </div>
    </Container>
  );
};