import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";

import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import "./navigation.styles.css";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  return (
    <>
      <div className="navigation">
        <Link
          className="logo-container"
          to="/"
        >
          <Logo cssClass="logo" />
        </Link>
        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="/shop"
          >
            SHOP
          </Link>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={signOutHandler}
            >
              SIGN OUT
            </span>
          ) : (
            <Link
              className="nav-link"
              to="/auth"
            >
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

export type LogoProps = {
  cssClass: string;
};
const Logo: FC<LogoProps> = ({ cssClass, ...otherProps }) => {
  return (
    <svg
      className={cssClass}
      width="50px"
      height="39px"
      viewBox="0 0 50 39"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {/* Generator: Sketch 53.2 (72643) - https://sketchapp.com */}
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <g
        id="WiP"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-90.000000, -38.000000)"
        >
          <g
            id="Group"
            transform="translate(90.000000, 38.000000)"
          >
            <polygon
              id="Rectangle"
              fill="#808282"
              points="3 14 25 26.5 47 14 40.855176 39 9.08421785 39"
            ></polygon>
            <polygon
              id="Triangle"
              fillOpacity="0.262838724"
              fill="#101A1A"
              points="25 8 40 39 10 39"
            ></polygon>
            <circle
              id="Oval"
              fill="#5E6363"
              cx="2"
              cy="9"
              r="2"
            ></circle>
            <circle
              id="Oval"
              fill="#5E6363"
              cx="25"
              cy="2"
              r="2"
            ></circle>
            <circle
              id="Oval"
              fill="#5E6363"
              cx="48"
              cy="9"
              r="2"
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  );
};
