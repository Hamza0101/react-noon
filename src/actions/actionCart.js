import type from "../types/type.js";
const { ADD_CART_ITEM, CHANGE_QUANTITY_CART } = type;

export const add_to_cart = (data) => {
  console.log("I am cart adds", ADD_CART_ITEM);
  return {
    type: ADD_CART_ITEM,
    payload: data,
  };
};
export const change_quantity = (data) => {
  return {
    type: CHANGE_QUANTITY_CART,
    payload: data,
  };
};
