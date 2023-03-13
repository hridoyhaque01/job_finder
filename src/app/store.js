import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import jobReducer from "../features/jobs/jobSlice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    filter: filterReducer,
  },
});
