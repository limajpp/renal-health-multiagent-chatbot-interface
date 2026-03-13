import { useImperativeHandle, useRef, type Ref, type ReactNode } from "react";
import Portal from "../Portal";

interface DialogProps {
  ref: Ref<DialogHandle> | undefined;
  target: Element | DocumentFragment;
  children?: ReactNode;
}

export type DialogHandle = {
  showModal: () => void;
  close: () => void;
};

export default function Dialog({ ref, target, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      showModal() {
        dialogRef.current?.showModal();
      },
      close() {
        dialogRef.current?.close();
      },
    }),
    [],
  );

  return (
    <Portal target={target}>
      <dialog
        ref={dialogRef}
        className="fixed inset-0 mt-6 mb-auto mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-xl backdrop:bg-black/40"
      >
        {children}
      </dialog>
    </Portal>
  );
}
