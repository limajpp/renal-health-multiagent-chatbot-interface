import type { ButtonHTMLAttributes } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  type: ButtonType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({
  name,
  type,
  onClick,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button name={name} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
