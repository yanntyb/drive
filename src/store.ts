import { configureStore } from "@reduxjs/toolkit";
import appBarReducer from "./Component/AppBar/appBarSlice";

export const store = configureStore({
  reducer: {
    title: appBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
