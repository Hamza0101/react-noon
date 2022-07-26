import type from "../types/type.js";
const {
  ADD_FILTER_PRODUCT,
  REMOVE_FILTER_PRODUCT,
  ADD_BRAND_FILTER,
  REMOVE_BRAND_FILTER,
  ADD_PRICE_FILTER,
  REMOVE_PRICE_FILTER,
  ADD_RATING_FILTER,
  REMOVE_RATING_FILTER,
} = type;

const filterReducer = (
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
    case ADD_FILTER_PRODUCT:
      if (action.payload.defaultAddress) {
        state = state.map((obj) => {
          return { ...obj, defaultAddress: false };
        });
      }
      state.push(action.payload);
      return state;
    case REMOVE_FILTER_PRODUCT:
      if (action.payload.defaultAddress) {
        state = state.map((obj) => {
          return { ...obj, defaultAddress: false };
        });
      }
      state = state.map((obj) => {
        if (obj.id === action.payload.id) return action.payload;
        return obj;
      });
      return state;
    case ADD_BRAND_FILTER:
      state = state.filter((e) => {
        return e.id !== action.payload;
      });
      return state;
    case REMOVE_BRAND_FILTER:
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

export default filterReducer;
