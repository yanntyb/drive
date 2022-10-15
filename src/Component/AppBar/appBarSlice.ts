import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface AppBarState {
  title: string;
}

const initialState: AppBarState = {
  title: "Menu",
};

export const appBarSlice = createSlice({
  name: "title",
  initialState: initialState,
  reducers: {
    change: (state, action) => {
      let title = action.payload;
      state.title = title.charAt(0).toUpperCase() + title.slice(1);
    },
  },
});

export const { change } = appBarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTitle = (state: RootState) => state.title.title;

export default appBarSlice.reducer;
