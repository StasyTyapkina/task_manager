import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";

export const FilterTasks = () => {
  const dispatch = useDispatch();
  const filterMode = useSelector((state) => state.tasks.filterMode);

  const handleFilterChange = (e, newFilterValue) => {
    if (newFilterValue !== null) {
      dispatch(setFilter(newFilterValue));
    }
  };

  return (
    <>
      <ToggleButtonGroup
        value={filterMode}
        exclusive
        onChange={handleFilterChange}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="favorite">Favorites</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
