import type from "../types/type.js";
const { ADD_ADDRESS, EDIT_ADDRESS, DELETE_ADDRESS, CHANGE_DEFAULT_ADDRESS } =
  type;

export const add = (data) => {
  return {
    type: ADD_ADDRESS,
    payload: data,
  };
};
export const edit = (data) => {
  return {
    type: EDIT_ADDRESS,
    payload: data,
  };
};
export const deleteAddress = (data) => {
  return {
    type: DELETE_ADDRESS,
    payload: data,
  };
};
export const updateDefaultAddress = (data) => {
  return {
    type: CHANGE_DEFAULT_ADDRESS,
    payload: data,
  };
};
