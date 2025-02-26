import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientTrackerProps } from "@/types";

const INITIAL_STATE: ClientTrackerProps = {
  clientId: undefined,
  action: "RESET",
  logs: ["Redux client initialized."],
  loaded: false,
  step: 1,
};

const clientTrackerSlice = createSlice({
  name: "clientTracker",
  initialState: INITIAL_STATE,
  reducers: {
    setClientId: (state, action: PayloadAction<string | undefined>) => {
      state.clientId = action.payload;
      state.action = "SET_CLIENT_ID";
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
      state.action = "SET_STEP";
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.loaded = action.payload;
      state.action = "SET_LOADED";
    },
    setLogs: (state, action: PayloadAction<string[]>) => {
      state.logs = action.payload;
      state.action = "SET_LOGS";
    },
    reset: () => INITIAL_STATE,
  },
});

export const { setClientId, setStep, setLoaded, setLogs, reset } =
  clientTrackerSlice.actions;

export default clientTrackerSlice.reducer;
