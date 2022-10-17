import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../store";

interface AuthenticationState {
  token: string;
  authenticated: boolean;
}

const initialState: AuthenticationState = {
  token: "",
  authenticated: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.authenticated = true;
    },
  },
});

export const { setToken } = authenticationSlice.actions;

export const getToken = (state: RootState) => state.authentication.token;
export const isAuthenticated = (state: RootState) =>
  state.authentication.authenticated;

export default authenticationSlice.reducer;
