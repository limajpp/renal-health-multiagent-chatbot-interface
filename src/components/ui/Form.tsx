type FormMethod = "get" | "post" | "dialog";

interface FormProps {
  action: string;
  method: FormMethod;
  name: string;
  className?: string;
  children: React.ReactNode;
}

export default function Form({
  action,
  method,
  name,
  className,
  children,
}: FormProps) {
  return (
    <form action={action} method={method} name={name} className={className}>
      {children}
    </form>
  );
}
