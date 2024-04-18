import { FC, ButtonHTMLAttributes } from "react";
import "./button.styles.scss";

export enum BUTTON_TYPE_CLASSES {
  basic = "basic",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  children: React.ReactNode | undefined;
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  if (!buttonType) {
    buttonType = "basic" as BUTTON_TYPE_CLASSES.basic;
  }

  return (
    <button
      className={`button-container ${buttonType}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
