import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    addPage: (state, action) => {
      state.pageNo = action.payload;
    },
  },
});

export const { addPage } = pageSlice.actions;
export default pageSlice.reducer;
