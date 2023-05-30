import React from "react";
import useDetails from "hooks/details";
import { TableRow } from "components/TableRow";
import { ExpandButton } from "components/ExpendableButton";

export const DetailsSection = ({ personDetails, index }) => {
  const { isOpen, toggle } = useDetails(false);
  return (
    <tbody>
      <tr>
        <td className="button-td">
          <ExpandButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>
          <b>Items : {index}</b>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {isOpen && <TableRow personDetails={personDetails} />}
    </tbody>
  );
};