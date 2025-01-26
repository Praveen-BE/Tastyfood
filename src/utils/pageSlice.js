import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageNo: 1,
    searchBar: false,
    searchText: "",
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
    updateSearchTextValue: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  addPage,
  toggleSearchBar,
  closeSearchBar,
  updateSearchTextValue,
} = pageSlice.actions;
export default pageSlice.reducer;
