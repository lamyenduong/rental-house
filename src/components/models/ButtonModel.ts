import {VariantProps} from "class-variance-authority";
import {ButtonStyles} from "../styles/Styles";
import {ComponentProps} from "react";

export type ButtonProps = VariantProps<typeof ButtonStyles> &
  ComponentProps<"button">;