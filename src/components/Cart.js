import React from "react";
import { useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
const handleClearCart =() => {
  dispatch(clearCart());
}

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart page</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
          {cartItems.length ==0 && (<h1>Cart is empty</h1>)}
          <ItemLists items={cartItems} />
        </div>
      </div>
    </>
  );
}
