import { type InputHTMLAttributes } from "react";

interface FieldGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  labelClassName?: string;
  labelText: string;
}

export default function FieldGroup({
  containerClassName,
  labelClassName,
  labelText,
  ...inputProps
}: FieldGroupProps) {
  return (
    <div className={containerClassName}>
      <label className={labelClassName}>{labelText}</label>
      <input {...inputProps} />
    </div>
  );
}
