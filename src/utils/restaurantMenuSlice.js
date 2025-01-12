import { createSlice } from "@reduxjs/toolkit";

const restaurantMenuSlice = createSlice({
  name: "restaurantMenu",
  initialState: {
    menuData: [],
    restaurantName: null,
  },
  reducers: {
    addMenuData: (state, action) => {
      state.menuData = action.payload;
    },
    clearMenuData: (state) => {
      state.menuData = [];
    },
    addRestaurantName: (state, action) => {
      state.restaurantName = action.payload;
    },
  },
});

export const { addMenuData, clearMenuData, addRestaurantName } =
  restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
