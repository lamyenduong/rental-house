import React from "react";
import {InputStyles} from "../styles/Styles";
import {InputProps} from "../models/InputModel";

const Input = ({
  variant,
  className,
  placeholder,
  value,
  type,
  readOnly,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={InputStyles({variant, className})}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      type={type}
    />
  );
};

export default Input;
