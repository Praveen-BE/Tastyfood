import { configureStore } from "@reduxjs/toolkit";
import restaurantListReducer from "./restaurantListSlice";
import restaurantMenuReducer from "./restaurantMenuSlice";
import pageReducer from "./pageSlice";
const appStore = configureStore({
  reducer: {
    restaurant: restaurantListReducer,
    restaurantMenu: restaurantMenuReducer,
    page: pageReducer,
  },
});

export default appStore;
