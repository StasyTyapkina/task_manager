import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskStatus,
  deleteTask,
  toggleTaskFavorite,
  moveTask,
} from "../redux/taskSlice";
import { selectFilteredTasks } from "../utils/taskSelectors";
import { Paper } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TaskItem } from "./TaskItem";
import { TaskEditDialog } from "./TaskEditDialog";

export const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectFilteredTasks);

  const [editTask, setEditTask] = useState(null);
  const [openEditDialog, setOpenEditDialog] = React.useState(false);

  const handleToggleStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleFavorite = (taskId, event) => {
    event.stopPropagation();
    dispatch(toggleTaskFavorite(taskId));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    dispatch(
      moveTask({
        startIndex: result.source.index,
        endIndex: result.destination.index,
      })
    );
  };

  const handleClickOpenEditDialog = (taskId, event) => {
    event.stopPropagation();
    setOpenEditDialog(true);
    setEditTask(taskId);
  };

  const closeEditDialog = () => {
    setOpenEditDialog(false);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks" type="task">
          {(provided) => (
            <Paper
              sx={{ mt: "15px" }}
              elevation={3}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem
                        task={task}
                        onToggleStatus={handleToggleStatus}
                        onToggleFavorite={handleToggleFavorite}
                        onDeleteTask={handleDeleteTask}
                        onEditTask={handleClickOpenEditDialog}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Paper>
          )}
        </Droppable>
      </DragDropContext>

      {openEditDialog && (
        <TaskEditDialog
          taskId={editTask?.id}
          initialName={editTask?.name || ""}
          open={openEditDialog}
          onClose={closeEditDialog}
        />
      )}
    </div>
  );
};
