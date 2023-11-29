import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { searchBarStyles, searchItemStyles } from "./styles";

const Search = () => {
  return (
    <Box style={searchBarStyles}>
    <Box style={searchItemStyles.rectangle}></Box>
    <Box style={searchItemStyles.vector}></Box>
    <Typography variant="body1" style={searchItemStyles.text}>
      Search Items, Fashion, Collection and Users
    </Typography>
  </Box>
  )
}

export default Search