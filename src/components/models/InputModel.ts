import {VariantProps} from "class-variance-authority";
import {InputStyles} from "../styles/Styles";
import {ComponentProps} from "react";

export type InputProps = VariantProps<typeof InputStyles> &
  ComponentProps<"input">;
