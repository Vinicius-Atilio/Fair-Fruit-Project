import React from "react";
import { Container, Info, Details } from './styles';

export const TableRow = ({ items }) => {
  return (
    <div>
      <div></div>
      <div>{items.descriptionProduct}</div>
      <div>{items.quantity}</div>
      <div>{items.unitPrice}</div>
    </div>
  );
};