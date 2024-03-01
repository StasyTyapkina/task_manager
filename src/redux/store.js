import { configureStore } from "@reduxjs/toolkit";
import { taskSliceReducer } from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

window.store = store;

export default store;
