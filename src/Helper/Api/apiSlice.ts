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

interface Route {}

const initialState: ApiState = {
  // baseUrl: "http://172.20.10.2/api",
  baseUrl: "https://shaggy-liger-40.loca.lt/api",
  urls: {
    API_LOGIN: "/user/login",
    API_REGISTER: "/user/register",
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
