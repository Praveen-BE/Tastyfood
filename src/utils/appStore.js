import { configureStore } from "@reduxjs/toolkit";
import restaurantListReducer from "./restaurantListSlice";
import restaurantMenuReducer from "./restaurantMenuSlice";
import pageReducer from "./pageSlice";
import cartReducer from "./cartSlice";
import errorReducer from "./errorSlice";
import priceReducer from "./priceSlice";
const appStore = configureStore({
  reducer: {
    restaurant: restaurantListReducer,
    restaurantMenu: restaurantMenuReducer,
    page: pageReducer,
    cart: cartReducer,
    error: errorReducer,
    price: priceReducer,
  },
});

export default appStore;
