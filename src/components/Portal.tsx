import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  target: Element | DocumentFragment;
}

export default function Portal({ children, target }: PortalProps) {
  return createPortal(children, target);
}
