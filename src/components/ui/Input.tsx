import type { InputHTMLAttributes, RefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
  name: string;
  type: string;
  placeholder: string;
  autocomplete: string;
  ref: RefObject<HTMLInputElement | null>;
}

export default function Input({
  className,
  name,
  type,
  placeholder,
  autocomplete,
  ref,
  ...rest
}: InputProps) {
  return (
    <input
      ref={ref}
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
