import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageNo: 1,
    searchBar: false,
    searchText: "",
    cupColor: "#1C274C",
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
    updateSubscriptionType: (state, action) => {
      state.cupColor = action.payload ? "#def245" : "#1C274C";
    },
  },
});

export const {
  addPage,
  toggleSearchBar,
  closeSearchBar,
  updateSearchTextValue,
  updateSubscriptionType,
} = pageSlice.actions;
export default pageSlice.reducer;
