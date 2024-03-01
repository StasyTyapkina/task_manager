import { createSelector } from "@reduxjs/toolkit";
import { selectTasks, selectFilterMode } from "../redux/taskSlice";

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilterMode],
  (tasks, filterMode) => {
    switch (filterMode) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "active":
        return tasks.filter((task) => !task.completed);
      case "favorite":
        return tasks.filter((task) => task.favorite);
      default:
        return tasks;
    }
  }
);
