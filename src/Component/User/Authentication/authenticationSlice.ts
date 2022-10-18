import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.authenticated = true;
    },
    logout: (state) => {
      state.token = "";
      state.authenticated = false;
    },
  },
});

export const { setToken, logout } = authenticationSlice.actions;

export const getToken = (state: RootState) => state.authentication.token;
export const isAuthenticated = (state: RootState) =>
  state.authentication.authenticated;

export default authenticationSlice.reducer;
