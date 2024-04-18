import { FC, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const renderShrink = (): boolean => {
    return Boolean(
      otherProps.value &&
        typeof otherProps.value === "string" &&
        otherProps.value.length
    );
  };
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherProps}
      ></input>
      {label && (
        <label className={`${renderShrink() ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
