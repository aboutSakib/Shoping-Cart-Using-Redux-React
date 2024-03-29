// using reactTollkit
import { createAction } from "@reduxjs/toolkit";
export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const modifyQunatityOfItem = createAction("cart/modifyQunatityOfItem");
export const clearCart = createAction("cart/clearCart");
