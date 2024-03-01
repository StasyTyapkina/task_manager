import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask(taskName));
    setTaskName("");
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mb: "12px" }}>
      <Grid item xs={8}>
        <TextField
          label="Task Name"
          variant="outlined"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          disabled={!taskName.trim()}
          title="Add Task"
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};
