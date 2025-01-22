import { createSlice } from "@reduxjs/toolkit";

const restaurantListSlice = createSlice({
  name: "restaurantList",
  initialState: {
    restarantList: null,
    updatedRestaurantList: null,
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
    searchRestaurantList: (state, action) => {
      state.updatedRestaurantList = state.restarantList.filter((data) =>
        data.info.name.includes(action.payload)
      );
    },
    defaultRestarantList: (state) => {
      state.updatedRestaurantList = state.restarantList;
    },
    sortByRestaurantList: (state, action) => {
      switch (action.payload) {
        case "deliveryTime":
          state.updatedRestaurantList = state.restarantList;
          break;
        case "rating":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.sort(
              (a, b) => b.info.avgRating - a.info.avgRating
            );
          }
          // state.updatedRestaurantList = null;
          break;
        default:
          state.updatedRestaurantList = state.restarantList;
      }
    },
  },
});
export const {
  addRestaurants,
  removeRestaurants,
  againAddRestaurants,
  searchRestaurantList,
  defaultRestarantList,
  sortByRestaurantList,
} = restaurantListSlice.actions;
export default restaurantListSlice.reducer;
