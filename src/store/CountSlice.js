import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
  name: "CountSlice",
  initialState: {
    number: 0,
  },
  reducers: {
    Increment: (state, action) => {
      state.number = state.number += 1;
    },
    Decrement: (state, action) => {
      if (state.number <= 0) return;
      state.number = state.number -= 1;
    },
    Increment_10: (state, action) => {
      state.number = state.number += 10;
    },
    Decrement_10: (state, action) => {
      if (state.number >= 10) {
        state.number -= 10;
      } else {
        state.number = 0;
      }
    },
    Reset: (state) => {
      state.number = 0;
    },
  },
});

export const { Increment, Decrement, Increment_10, Decrement_10, Reset } =
  CountSlice.actions;

export default CountSlice.reducer;
