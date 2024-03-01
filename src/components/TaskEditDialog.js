import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/taskSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

export const TaskEditDialog = ({ taskId, initialName, open, onClose }) => {
  const dispatch = useDispatch();
  const [editedTaskName, setEditedTaskName] = useState(initialName);

  const handleEditTask = () => {
    dispatch(updateTask({ id: taskId, name: editedTaskName }));
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          type="text"
          fullWidth
          placeholder="Add text"
          value={editedTaskName}
          onChange={(e) => setEditedTaskName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleEditTask}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
