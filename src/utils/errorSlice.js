import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    errorMinus: false,
  },
  reducers: {
    errorMinusTrue: (state) => {
      state.errorMinus = true;
    },
    errorMinusFalse: (state) => {
      state.errorMinus = false;
    },
  },
});

export const { errorMinusTrue, errorMinusFalse } = errorSlice.actions;
export default errorSlice.reducer;
