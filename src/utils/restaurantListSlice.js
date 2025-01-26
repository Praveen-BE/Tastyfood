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
      // state.updatedRestaurantList = null;
    },
    sortByRestaurantList: (state, action) => {
      switch (action.payload) {
        case "default":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value;
          }
          break;
        case "deliveryTime":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.sort(
              (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
            );
          }
          break;
        case "rating":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.sort(
              (a, b) => b.info.avgRating - a.info.avgRating
            );
          }
          break;
        default:
          state.updatedRestaurantList = state.restarantList;
      }
    },
    filterByRestaurantList: (state, action) => {
      switch (action.payload) {
        case "topRated":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.filter(
              (data) => data.info.avgRating >= 4.5
            );
          }
          break;
        case "4andAbove":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.filter(
              (data) => data.info.avgRating >= 4
            );
          }
          break;
        case "3tobelow4":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.filter(
              (data) => data.info.avgRating < 4 && data.info.avgRating >= 3
            );
          }
          break;
        case "below3":
          {
            const value = state.restarantList;
            state.updatedRestaurantList = value.filter(
              (data) => data.info.avgRating < 3
            );
          }
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
  filterByRestaurantList,
} = restaurantListSlice.actions;
export default restaurantListSlice.reducer;
