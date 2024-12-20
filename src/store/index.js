import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import userSlice from "./userSlice";
import CountSlice from "./CountSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    mainReducer,
    userSlice,
    CountSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
