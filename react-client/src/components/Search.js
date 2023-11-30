import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { searchBarStyles, searchItemStyles } from "./styles";

const Search = () => {
  return (
    <Box sx={searchBarStyles}>
      {/* Rectangle 1 */}
      <Box sx={searchItemStyles.rectangle}></Box>

      {/* Vector */}
      <Box sx={searchItemStyles.vector}></Box>

      {/* Search Items, Fashion, Collection, and Users */}
      <Typography variant="body1" sx={searchItemStyles.text}>
        Search brands..
      </Typography>
    </Box>
  );
};

export default Search;