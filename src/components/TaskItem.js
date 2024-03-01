import React from "react";
import {
  ListItemText,
  ListItemSecondaryAction,
  ListItemButton,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EditIcon from "@mui/icons-material/Edit";

export const TaskItem = ({
  task,
  onToggleStatus,
  onToggleFavorite,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <ListItemButton
      style={{
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onClick={() => onToggleStatus(task.id)}
        title={task.completed ? "Delete from Completed" : "Add to Completed"}
      />
      <ListItemText primary={task.name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          onClick={(event) => onToggleFavorite(task.id, event)}
          title={task.favorite ? "Delete from Favorites" : "Add to Favorites"}
        >
          {task.favorite ? <StarIcon /> : <StarOutlineIcon />}
        </IconButton>
        <IconButton
          edge="end"
          onClick={(event) => onEditTask(task, event)}
          title="Edit Task"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          onClick={() => onDeleteTask(task.id)}
          title="Delete Task"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};
