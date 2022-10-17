import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../store";

interface AppBarState {
  title: string;
  noDisplayedTitle: Array<string>;
}

const initialState: AppBarState = {
  title: "",
  noDisplayedTitle: [],
};

const dontDisplayTitle: Array<string> = ["accueil"];

const needToBeDisplayed = (title: string) => {
  return !dontDisplayTitle.includes(title.toLowerCase());
};

const firstLetterUppercase = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const appBarSlice = createSlice({
  name: "title",
  initialState: initialState,
  reducers: {
    changeTitle: (state, action) => {
      let title = action.payload;
      needToBeDisplayed(title)
        ? (state.title = firstLetterUppercase(title))
        : (state.title = "");
    },
    doNotDisplayThisTitle: (state, action) => {
      let title = action.payload;
      if (needToBeDisplayed(title)) {
        state.noDisplayedTitle = [
          ...state.noDisplayedTitle,
          title.toLowerCase(),
        ];
      }
    },
  },
});

export const { changeTitle, doNotDisplayThisTitle } = appBarSlice.actions;

export const getTitle = (state: RootState) => state.title.title;

export default appBarSlice.reducer;
