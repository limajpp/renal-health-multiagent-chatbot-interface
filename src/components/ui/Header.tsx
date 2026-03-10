import Image from "./Image";

interface HeaderProps {
  containerClassName?: string;
  logoSrc: string;
  logoAlt: string;
  logoClassName?: string;
  title: string;
  subtitle: string;
}

export default function Header({
  containerClassName,
  logoSrc,
  logoAlt,
  logoClassName,
  title,
  subtitle,
}: HeaderProps) {
  return (
    <div className={containerClassName}>
      <Image src={logoSrc} alt={logoAlt} className={logoClassName} />
      <h1 className="text-2xl text-slate-700 font-black">{title}</h1>
      <p className="text-xs text-slate-700 opacity-80">{subtitle}</p>
    </div>
  );
}
