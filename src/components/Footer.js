import React from "react";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </Typography>
    </div>
  );
};
