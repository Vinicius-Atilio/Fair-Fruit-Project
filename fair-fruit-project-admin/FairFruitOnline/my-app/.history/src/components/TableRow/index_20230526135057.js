import React from "react";

export const TableRow = ({ orderDetails }) => {
  return (
    <tr>
      <td></td>
      <td>{orderDetails.items}</td>
      <td>{orderDetails.total}</td>
    </tr>
  );
};