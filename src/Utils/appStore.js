import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import configReducer from "./configSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
  },
});

export default appStore;
