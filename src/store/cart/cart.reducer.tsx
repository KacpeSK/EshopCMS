import { UnknownAction } from "redux";

import { CartItem } from "./cart.types";

import { setIsCartOpen, setCartItems } from "./cart.action";
// INITIAL STATE

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

// REDUCER

export const cartReducer = (
  state = CART_INITIAL_STATE,
  // before it was  action = {} as UnknownAction
  action: UnknownAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: !state.isCartOpen,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
