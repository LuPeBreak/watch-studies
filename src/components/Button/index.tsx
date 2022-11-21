import React from "react";
import style from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ children, type }: Props) => {
  return (
    <button type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
