import type from "../types/type.js";
const { ADD_CART_ITEM, CHANGE_QUANTITY_CART } = type;

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      if (!state.length) {
        state.push(action.payload);
        return state;
      }
      let check = false;
      state = state.map((obj) => {
        if (obj.pid === action.payload.pid) {
          check = true;
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      });

      if (check === false) {
        state.push(action.payload);
      }
      alert("Product Added in Cart");
      return state;
    case CHANGE_QUANTITY_CART:
      state = state.map((obj) => {
        if (obj.id === action.payload.cartId) {
          return { ...obj, quantity: action.payload.quantity };
        }
        return obj;
      });

      return state;

    default:
      return state;
  }
};

export default cartReducer;
