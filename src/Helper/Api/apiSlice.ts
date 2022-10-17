import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Config from "react-native-config";

interface IUrl {
  [name: string]: string;
}

interface ApiState {
  baseUrl: string;
  urls: IUrl;
}

const initialState: ApiState = {
  baseUrl: "https://local.drive.api/api",
  urls: {
    API_LOGIN: "/user/login",
  },
};

export const apiSlice = createSlice({
  name: "api",
  initialState: initialState,
  reducers: {},
});

export const {} = apiSlice.actions;

export const getUrls = (state: RootState) => state.api.urls;
export const getApiUrl = (state: RootState, key: string) =>
  state.api.baseUrl + state.api.urls[key];

export default apiSlice.reducer;
