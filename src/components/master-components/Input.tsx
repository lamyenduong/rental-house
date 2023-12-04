import React, { forwardRef } from "react";
import { InputStyles } from "../styles/Styles";
import { InputProps } from "../models/InputModel";

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant,
  className,
  placeholder,
  value,
  type,
  readOnly,
  ...props
}: InputProps, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={InputStyles({ variant, className })}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      type={type}
    />
  );
});

export default Input;
