import clsx from "clsx";
import React from "react";

type Props = {
  text: string;
  variant: "primary" | "ghost";
};

const Button = ({ text, variant }: Props) => {
  return (
    <button
      className={clsx([
        variant === "primary"
          ? "text-white bg-[#D90087]"
          : "bg-transparent border border-[#D90087] text-black",
        "px-8 py-2 rounded-md dark:text-white",
      ])}
    >
      {text}
    </button>
  );
};

export default Button;
