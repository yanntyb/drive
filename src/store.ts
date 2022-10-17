import { configureStore } from "@reduxjs/toolkit";
import appBarReducer from "./Component/Layout/AppBar/appBarSlice";
import authenticationReducer from "./Component/User/Authentication/authenticationSlice";
import apiReducer from "./Helper/Api/apiSlice";

export const store = configureStore({
  reducer: {
    title: appBarReducer,
    authentication: authenticationReducer,
    api: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
