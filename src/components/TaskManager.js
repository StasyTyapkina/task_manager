import React from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { FilterTasks } from "./FilterTasks";

export const TaskManager = () => {
  return (
    <>
      <TaskForm />
      <FilterTasks />
      <TaskList />
    </>
  );
};
