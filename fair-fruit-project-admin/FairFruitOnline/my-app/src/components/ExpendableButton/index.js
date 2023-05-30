import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from '@material-ui/core';

export const ExpandButton = ({ open, toggle }) => {
  return (
    <IconButton onClick={toggle}>
        {open? <ExpandLessIcon color="primary"/> : <ExpandMoreIcon color="primary"/>}
    </IconButton>
  );
};