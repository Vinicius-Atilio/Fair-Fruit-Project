import React from "react";

export const TableRow = ({ items }) => {
  console.log("fui aberto")
  console.log("items", items)
  return (
    <div>
      <div></div>
      <div>{items.descriptionProduct}</div>
      <div>{items.quantity}</div>
      <div>{items.unitPrice}</div>
    </div>
  );
};