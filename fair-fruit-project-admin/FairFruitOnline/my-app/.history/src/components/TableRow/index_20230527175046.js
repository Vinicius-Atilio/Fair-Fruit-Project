import React from "react";

export const TableRow = ({ orderDetails }) => {
  return (
    <div>
      <div></div>
      <div>{orderDetails.items}</div>
      <div>{orderDetails.total}</div>
    </div>
  );
};