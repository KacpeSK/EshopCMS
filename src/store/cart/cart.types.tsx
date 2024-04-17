import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "SET_CART_ITEMS",
  IS_CART_OPEN = "IS_CART_OPEN",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
