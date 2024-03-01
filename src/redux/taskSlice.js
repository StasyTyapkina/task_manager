import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filterMode: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        name: action.payload,
        completed: false,
        favorite: false,
      });
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filterMode = action.payload;
    },

    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    toggleTaskFavorite: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.favorite = !task.favorite;
      }
    },

    moveTask: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [task] = state.tasks.splice(startIndex, 1);
      state.tasks.splice(endIndex, 0, task);
    },

    updateTask: (state, action) => {
      const { id, name } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.name = name;
      }
    },
  },
});

export const {
  addTask,
  toggleTaskStatus,
  deleteTask,
  setFilter,
  toggleTaskFavorite,
  moveTask,
  updateTask,
} = taskSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectFilterMode = (state) => state.tasks.filterMode;

export const taskSliceReducer = taskSlice.reducer;
