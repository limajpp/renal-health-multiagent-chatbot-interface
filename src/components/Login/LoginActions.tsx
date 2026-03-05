interface LoginActionsProps {
  className?: string;
  buttonClassName?: string;
  buttonText: string;
  forgotPasswordText: string;
  forgotPasswordHref: string;
  registerPrompt: string;
  registerText: string;
  registerHref: string;
}

export default function LoginActions({
  className,
  buttonClassName,
  buttonText,
  forgotPasswordText,
  forgotPasswordHref,
  registerPrompt,
  registerText,
  registerHref,
}: LoginActionsProps) {
  return (
    <div className={className}>
      <button className={buttonClassName}>{buttonText}</button>
      <div className="flex flex-col items-center">
        <a className="font-black hover:underline" href={forgotPasswordHref}>
          {forgotPasswordText}
        </a>
        <p>
          {registerPrompt}{" "}
          <a href={registerHref} className="font-black hover:underline">
            {registerText}
          </a>
        </p>
      </div>
    </div>
  );
}
