import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ExpandButton = ({ isOpen, toggle }) => {
  return (
    <button onClick={console.log("click")}>
        {isOpen? <ExpandLessIcon color="primary"/> : <ExpandMoreIcon color="primary"/>}
    </button>
  );
};