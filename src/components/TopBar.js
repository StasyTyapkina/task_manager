import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const TopBar = () => {
  return (
    <AppBar position="static" style={{ marginBottom: "30px" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
