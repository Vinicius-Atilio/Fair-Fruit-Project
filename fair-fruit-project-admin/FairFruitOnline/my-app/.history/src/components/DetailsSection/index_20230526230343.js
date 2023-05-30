import React from "react";
import useDetails from "hooks/details";
import { TableRow } from "components/TableRow";
import { ExpandButton } from "components/ExpendableButton";

export const DetailsSection = ( code ) => {
  console.log(code);
  const { isOpen, toggle } = useDetails(false);
  return (
    <div>
        <div className="button">
          <ExpandButton isOpen={isOpen} toggle={toggle} />
        </div>
      {isOpen && <TableRow orderDetails={code} />}
    </div>
  );
};