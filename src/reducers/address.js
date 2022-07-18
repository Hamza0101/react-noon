const addressReducer = (
  state = [
    {
      id: 1,
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
    case "add":
      if (action.payload.defaultAddress) {
        state = state.map((obj) => {
          console.log("you are finding me", obj);
          return { ...obj, defaultAddress: false };
        });
      }
      state.push(action.payload);
      console.log("I am state", state);
      return state;
    case "edit":
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
    case "deleteAddress":
      state = state.filter((e) => {
        return e.id !== action.payload;
      });
      return state;
    case "updateDefaultAddress":
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
