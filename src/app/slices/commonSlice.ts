import { createSlice } from "@reduxjs/toolkit";

export interface CommonState {
  isShowNotify?: boolean;
  notifyContent?: string;
  typeAlert?: string;
  progressNumber?: number;
  loading?: boolean;
}

// Initial state
const initialState: CommonState = {
    isShowNotify: false,
    notifyContent: "",
    typeAlert: "success",
    progressNumber: 0,
    loading: false
};

// Actual Slice
export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setNotify (state, action) {
        state.isShowNotify = action.payload.isShowNotify
        state.notifyContent = action.payload.notifyContent
        state.typeAlert = action.payload.typeAlert
    },
    setProgress (state, action) {
      state.progressNumber = action.payload
      state.typeAlert = action.payload.typeAlert || "success";
    },
    setLoading (state, action) {
      state.loading = action.payload
    }
  },
});

export const { setNotify, setProgress, setLoading } = commonSlice.actions;

export default commonSlice.reducer;
