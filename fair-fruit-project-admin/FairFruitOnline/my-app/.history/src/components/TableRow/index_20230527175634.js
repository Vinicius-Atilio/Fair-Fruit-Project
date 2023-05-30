import React from "react";

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