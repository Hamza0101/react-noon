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

export const addFilter = (data) => {
  return {
    type: ADD_FILTER_PRODUCT,
    payload: data,
  };
};
export const removeFilter = (data) => {
  return {
    type: REMOVE_FILTER_PRODUCT,
    payload: data,
  };
};
export const addBrandFilter = (data) => {
  return {
    type: ADD_BRAND_FILTER,
    payload: data,
  };
};
export const removeBrandFilter = (data) => {
  return {
    type: REMOVE_BRAND_FILTER,
    payload: data,
  };
};
export const addPriceFilter = (data) => {
  return {
    type: ADD_PRICE_FILTER,
    payload: data,
  };
};
export const removePriceFilter = (data) => {
  return {
    type: REMOVE_PRICE_FILTER,
    payload: data,
  };
};
export const addRatingFilter = (data) => {
  return {
    type: ADD_RATING_FILTER,
    payload: data,
  };
};
export const removeRatingFilter = (data) => {
  return {
    type: REMOVE_RATING_FILTER,
    payload: data,
  };
};
