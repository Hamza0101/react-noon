import type from "../types/type.js";
const { ADD_ADDRESS, EDIT_ADDRESS, DELETE_ADDRESS, CHANGE_DEFAULT_ADDRESS } =
  type;

const addressReducer = (
  state = [
    {
      id: "l5qo0m5s0.cs8jsp8wmng",
      fullAddress: "Gulshan E lahore",
      firstName: "Test",
      lastName: "Developer",
      defaultAddress: true,
      label: "work",
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_ADDRESS:
      if (action.payload.defaultAddress) {
        state = state.map((obj) => {
          console.log("you are finding me", obj);
          return { ...obj, defaultAddress: false };
        });
      }
      state.push(action.payload);
      console.log("I am state", state);
      return state;
    case EDIT_ADDRESS:
      console.log("I am reducer");
      if (action.payload.defaultAddress) {
        state = state.map((obj) => {
          console.log("you are finding me", obj);
          return { ...obj, defaultAddress: false };
        });
      }
      state = state.map((obj) => {
        if (obj.id === action.payload.id) return action.payload;
        return obj;
      });
      return state;
    case DELETE_ADDRESS:
      state = state.filter((e) => {
        return e.id !== action.payload;
      });
      return state;
    case CHANGE_DEFAULT_ADDRESS:
      state = state.map((data) => {
        if (data.id === action.payload) {
          return { ...data, defaultAddress: true };
        } else {
          return { ...data, defaultAddress: false };
        }
      });
      return state;
    default:
      return state;
  }
};

export default addressReducer;
