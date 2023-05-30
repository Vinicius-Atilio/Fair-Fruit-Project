import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@material-ui/core';

export const ExpandButton = ({ isOpen, toggle }) => {
  return (
    <IconButton onClick={() => console.log("click")}>
        {isOpen? <ExpandLessIcon color="primary"/> : <ExpandMoreIcon color="primary"/>}
    </IconButton>
  );
};