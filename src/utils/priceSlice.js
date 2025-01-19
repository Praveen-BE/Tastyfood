import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    itemsPrice: {},
  },
  reducers: {
    addItemAndPriceAndCount: (state, action) => {
      const { key, value } = action.payload;
      state.itemsPrice[key] = value;
    },
    removeItemAndPriceAndCount: (state, action) => {
      const { key } = action.payload;
      delete state.itemsPrice[key];
    },
    increaseItemCount: (state, action) => {
      const key = action.payload;
      state.itemsPrice[key] = {
        ...state.itemsPrice[key],
        count: (state.itemsPrice[key]?.count || 0) + 1,
      };
    },
    decreaseItemCount: (state, action) => {
      const key = action.payload;
      state.itemsPrice[key] = {
        ...state.itemsPrice[key],
        count:
          (state.itemsPrice[key]?.count >= 2
            ? state.itemsPrice[key]?.count
            : 2) - 1,
      };
    },
    emtpyItemCount: (state) => {
      state.itemsPrice = {};
    },
  },
});

export const {
  addItemAndPriceAndCount,
  removeItemAndPriceAndCount,
  increaseItemCount,
  decreaseItemCount,
  emtpyItemCount,
} = priceSlice.actions;
export default priceSlice.reducer;
