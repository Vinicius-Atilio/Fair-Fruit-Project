import React from "react";
import useDetails from "hooks/details";
import { TableRow } from "components/TableRow";
import { ExpandButton } from "components/ExpendableButton";

export const DetailsSection = ({ itemDetails }) => {
  const { isOpen, toggle } = useDetails(false);
  return (
    <div>
        <div className="button-td">
          <ExpandButton isOpen={isOpen} toggle={toggle} />
        </div>
      {isOpen && <TableRow itemDetails={itemDetails} />}
    </div>
  );
};