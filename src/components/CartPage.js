import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard, { ItemCardAdd, ItemCartRemove } from "./ItemCard";
import CartItemCard from "./CartItemCard";
import ErrorMinus from "./ErrorMinus";
import Shimmer from "./Shimmer";
import { emtyCartItem } from "../utils/cartSlice";
import { emtpyItemCount } from "../utils/priceSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartData);
  const cartPrice = useSelector((store) => store.price.itemsPrice);
  const RemoveCartItemComponent = ItemCartRemove(ItemCard);
  const totalPrice = Object.values(cartPrice);
  const totalPriceValue = totalPrice.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);
  const clearCart = () => {
    dispatch(emtyCartItem());
    dispatch(emtpyItemCount());
  };
  return (
    <div className="m-0 flex flex-col">
      <ErrorMinus />
      {cartItems.length == 0 ? (
        <h1 className="m-0 p-0 text-[3rem] text-center font-display font-bold">
          This Cart is Empty
        </h1>
      ) : (
        <button
          onClick={() => clearCart()}
          className="m-0 p-0 text-[3rem] text-center font-display font-bold"
        >
          Clear Cart
        </button>
      )}

      <div>
        <div>
          {cartItems.map((item) => (
            <CartItemCard key={item?.card?.info?.id} data={item} />
          ))}
        </div>
        <div className="flex justify-center">
          {cartItems.length != 0 && (
            <div className="flex flex-col justify-center items-center">
              <h1 className="m-4 text-[3rem] font-display">
                Total Price : {totalPriceValue} Rs
              </h1>
              <h1 className="m-4 p-4 w-[10rem] text-center text-[3rem] font-display font-bold bg-green-300 rounded-2xl">
                Buy
              </h1>
            </div>
          )}
        </div>
      </div>
      {cartItems.length != 0 && (
        <>
          <h1 className="m-0 p-0 text-[4rem] text-center font-display font-bold">
            Items List
          </h1>
          <div className="flex justify-center">
            <button
              onClick={() => clearCart()}
              className="m-0 px-5 py-2 text-[2rem] text-center font-display font-bold bg-red-500 rounded-3xl"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
      <div>
        {cartItems.map((data) => (
          <RemoveCartItemComponent key={data?.card?.info?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
