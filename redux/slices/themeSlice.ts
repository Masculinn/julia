import { ThemeState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: ThemeState = "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (_, action): void => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
