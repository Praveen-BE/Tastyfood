import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageNo: 1,
    searchBar: false,
  },
  reducers: {
    addPage: (state, action) => {
      state.pageNo = action.payload;
    },
    toggleSearchBar: (state) => {
      state.searchBar = !state.searchBar;
    },
    closeSearchBar: (state) => {
      state.searchBar = false;
    },
  },
});

export const { addPage, toggleSearchBar, closeSearchBar } = pageSlice.actions;
export default pageSlice.reducer;
