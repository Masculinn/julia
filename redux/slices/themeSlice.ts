import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: boolean = true;

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    /**
     * Set the theme
     * @function setTheme
     * @returns {boolean}
     */
    setTheme: (_, action): boolean => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
