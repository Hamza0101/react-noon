import type from "../types/type.js";
const { ADD_CART_ITEM, INCREMENT_QUANTITY_CART, DECREMENT_QUANTITY_CART } =
  type;

const cartReducer = (state = [], action) => {
  console.log("I am reducer");
  switch (action.type) {
    case ADD_CART_ITEM:
      let check = false;
      let myState;
      state.length
        ? (myState = state.map((obj) => {
            if (obj.id === action.payload.id) {
              check = true;
              return { ...obj, quantity: obj.quantity + 1 };
            }
            return obj;
          }))
        : state.push(action.payload);
      state = myState;
      if (check === false) {
        state.push(action.payload);
      }
      alert("Iam state");

      console.log("I am cart state", state);
      return state;
    case INCREMENT_QUANTITY_CART:
      console.log("i am increment_quantity");
      return state;
    case DECREMENT_QUANTITY_CART:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
