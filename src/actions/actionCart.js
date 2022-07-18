import type from "../types/type.js";
const { ADD_CART_ITEM, INCREMENT_QUANTITY_CART, DECREMENT_QUANTITY_CART } =
  type;

export const add_to_cart = (data) => {
  console.log("I am cart adds", ADD_CART_ITEM);
  return {
    type: ADD_CART_ITEM,
    payload: data,
  };
};
export const increment_quantity = (data) => {
  return {
    type: INCREMENT_QUANTITY_CART,
    payload: data,
  };
};
export const decrement_quantity = (data) => {
  return {
    type: DECREMENT_QUANTITY_CART,
    payload: data,
  };
};
