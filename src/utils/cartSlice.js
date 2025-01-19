const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const tempObject = action.payload;
      state.cartData = state.cartData.filter(
        (data) => data?.card?.info?.id != tempObject?.card?.info?.id
      );
    },
    emtyCartItem: (state) => {
      state.cartData = [];
    },
  },
});

export const { addCartItem, removeCartItem, emtyCartItem } = cartSlice.actions;
export default cartSlice.reducer;
