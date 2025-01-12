import { createSlice } from "@reduxjs/toolkit";

const restaurantListSlice = createSlice({
  name: "restaurantList",
  initialState: {
    restarantList: null,
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.restarantList = action.payload;
    },
    removeRestaurants: () => {
      return [];
    },
    againAddRestaurants: (state, action) => {
      const data = action.payload;
      data.map((resta) => state.restarantList.push(resta));
    },
  },
});
export const { addRestaurants, removeRestaurants, againAddRestaurants } =
  restaurantListSlice.actions;
export default restaurantListSlice.reducer;
