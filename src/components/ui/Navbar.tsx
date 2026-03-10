import type { HTMLAttributes } from "react";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Navbar({ className, children, ...rest }: NavbarProps) {
  return (
    <nav className={className} {...rest}>
      {children}
    </nav>
  );
}
