import Logo from "../ui/Logo";

interface LoginHeaderProps {
  className?: string;
  logoSrc: string;
  logoAlt: string;
  logoClassName?: string;
  title: string;
  subtitle: string;
}

export default function LoginHeader({
  className,
  logoSrc,
  logoAlt,
  logoClassName,
  title,
  subtitle,
}: LoginHeaderProps) {
  return (
    <div className={className}>
      <Logo src={logoSrc} alt={logoAlt} className={logoClassName} />
      <h1 className="text-2xl text-slate-700 font-black">{title}</h1>
      <p className="text-xs text-slate-700 opacity-80">{subtitle}</p>
    </div>
  );
}
