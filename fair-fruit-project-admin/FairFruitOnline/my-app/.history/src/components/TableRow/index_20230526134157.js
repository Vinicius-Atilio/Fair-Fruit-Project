import React from "react";

export const TableRow = ({ orderDetais }) => {
  return (
    <tr>
      <td></td>
      <td>{orderDetais.items}</td>
      <td>{orderDetais.total}</td>
    </tr>
  );
};