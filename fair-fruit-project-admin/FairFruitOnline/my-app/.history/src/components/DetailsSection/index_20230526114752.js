import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import useDetails from "hooks/details";

export const TableSection = ({ personDetails, index }) => {
  const { isOpen, toggle } = useDetails(false);
  return (
    <tbody>
      <tr>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>
          <b>Person : {index}</b>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {isOpen && <TableRow personDetails={personDetails} />}
    </tbody>
  );
};