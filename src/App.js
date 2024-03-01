import React from "react";
import { Grid, Container } from "@mui/material";
import { TaskManager } from "./components/TaskManager";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <TopBar />
      <Container
        maxWidth="lg"
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <TaskManager />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};
