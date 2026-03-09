import { Eye, EyeOff } from "lucide-react";
import { useState, type InputHTMLAttributes, type RefObject } from "react";

interface FieldGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  labelClassName?: string;
  enablePasswordToggle?: boolean;
  labelText: string;
  nameRef?: RefObject<HTMLInputElement | null>;
  emailRef?: RefObject<HTMLInputElement | null>;
  passwordRef?: RefObject<HTMLInputElement | null>;
}

export default function FieldGroup({
  containerClassName,
  labelClassName,
  enablePasswordToggle,
  labelText,
  nameRef,
  emailRef,
  passwordRef,
  ...inputProps
}: FieldGroupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const showToggle = inputProps.type === "password" && enablePasswordToggle;

  return (
    <div className={containerClassName}>
      <label className={labelClassName}>{labelText}</label>

      {showToggle ? (
        <div className="relative flex items-center w-full">
          <input
            ref={passwordRef}
            {...inputProps}
            type={showPassword ? "text" : "password"}
            className={inputProps.className}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      ) : (
        <input ref={nameRef || emailRef} {...inputProps} />
      )}
    </div>
  );
}
