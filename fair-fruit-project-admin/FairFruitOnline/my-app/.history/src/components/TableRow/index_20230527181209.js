import React from "react";
import { Container, Info, Details } from './styles';

export const TableRow = ({ items }) => {
  return (
    <Container>
      <div>
        <h2>Item</h2>
        {items.descriptionProduct}
      </div>
      <div>
        <h2>Quantity</h2>
        {items.quantity}
      </div>
      <div>
        <h2>Unit Price</h2>
        {items.unitPrice}
      </div>
    </Container>
  );
};