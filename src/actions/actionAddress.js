export const add = (data) => {
  return {
    type: "add",
    payload: data,
  };
};
export const edit = (data) => {
  return {
    type: "edit",
    payload: data,
  };
};
export const deleteAddress = (data) => {
  return {
    type: "deleteAddress",
    payload: data,
  };
};
export const updateDefaultAddress = (data) => {
  return {
    type: "updateDefaultAddress",
    payload: data,
  };
};
