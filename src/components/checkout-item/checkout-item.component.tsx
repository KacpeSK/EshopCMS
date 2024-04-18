import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  decreaseItemQuantity,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.types";

import "./checkout-item.styles.scss";

export type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const decreaseItemHandler = () =>
    dispatch(decreaseItemQuantity(cartItems, cartItem));
  const increaseItemHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img
            src={imageUrl}
            alt={name}
          />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div
            className="arrow"
            onClick={decreaseItemHandler}
          >
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div
            className="arrow"
            onClick={increaseItemHandler}
          >
            &#10095;
          </div>
        </span>

        <span className="price">
          {price}€ <span className="sub-total">({price * quantity}€)</span>
        </span>
        <div
          className="remove-button"
          onClick={removeItemHandler}
        >
          &#10005;
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
