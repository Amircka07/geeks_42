import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    title: "old title",
    inputValue: "",
  },
  reducers: {
    mainInfo: (state, action) => {
      state.title = "new title";
    },
    withParams: (state, action) => {
      state.title = action.payload;
      state.inputValue = "";
    },
    changeInputAction: (state, action) => {
      state.inputValue = action.payload;
    },
    clearInput: (state, action) => {
      state.inputValue = "";
    },
    deleteTitle: (state, action) => {
      state.inputValue = "";
      state.title = "";
    },
  },
});

export const {
  mainInfo,
  withParams,
  changeInputAction,
  clearInput,
  deleteTitle,
} = MainSlice.actions;

export default MainSlice.reducer;
