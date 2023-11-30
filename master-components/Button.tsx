import React from "react";
import {ButtonStyles} from "../styles/Styles";
import {ButtonProps} from "../models/ButtonModel";

const Button = ({variant, className, type, ...props}: ButtonProps) => {
  return (
    <button
      {...props}
      className={ButtonStyles({variant, className})}
      type={type}
    />
  );
};

export default Button;
