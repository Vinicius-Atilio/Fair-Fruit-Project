import React from "react";
import useDetails from "hooks/details";
import { TableRow } from "components/TableRow";
import { ExpandButton } from "components/ExpendableButton";

export const DetailsSection = ( code ) => {
  console.log(code);
  const { open, toggle } = useDetails(false);
  return (
    <div>
        <div className="button">
          <ExpandButton open={open} toggle={toggle} />
        </div>
      {open && <TableRow orderDetails={code} />}
    </div>
  );
};