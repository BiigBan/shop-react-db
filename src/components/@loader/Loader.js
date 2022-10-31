import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import "./loader.css";
import React from "react";

export default function Loader() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
}
