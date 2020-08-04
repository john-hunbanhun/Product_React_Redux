import * as Actions from "./action";
import initialState from "../store/initialState";

export const ProductReducer = (state = initialState.products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
