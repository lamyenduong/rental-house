import {cva} from "class-variance-authority";

export const ButtonStyles = cva(
  ["transition-opacity", "hover:opacity-90", "cursor-pointer"],
  {
    variants: {
      variant: {
        default: [
          "rounded-full",
          "pl-6",
          "pr-6",
          "pt-2",
          "pb-2",
          "text-center",
          "w-full",
          "h-10",
          "text-white",
          "bg-green",
        ],
        icon: [
          "rounded-lg",
          "aspect-square",
          "h-10",
          "flex",
          "justify-center",
          "items-center",
          "bg-plants",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const InputStyles = cva(
  ["transition-all", "outline-none", "border-green", "text-blackish_gray"],
  {
    variants: {
      variant: {
        default: [
          "rounded-full",
          "pl-3",
          "pr-3",
          "border",
          "w-full",
          "h-10",
          "shadow-light_gray",
          "shadow-around",
          "focus:border-2",
        ],
        secondary: ["rounded-xl", "pl-3", "pr-3", "h-10", "border-3", "w-full"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
