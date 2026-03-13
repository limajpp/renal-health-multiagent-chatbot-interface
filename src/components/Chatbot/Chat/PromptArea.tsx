import type { KeyboardEvent, MouseEventHandler, RefObject } from "react";
import Button from "../../ui/Button";
import { SendHorizonal } from "lucide-react";
import Input from "../../ui/Input";

interface PromptAreaProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  ref: RefObject<HTMLInputElement | null>;
}

export default function PromptArea({
  onClick,
  onKeyDown,
  ref,
}: PromptAreaProps) {
  return (
    <div className="relative flex items-center w-full">
      <Input
        ref={ref}
        className="w-full bg-slate-200 border border-slate-200 font-medium text-slate-700 focus:outline-none focus:border-slate-400 focus:bg-white py-3 pl-4 pr-12 rounded-2xl transition-colors"
        placeholder="Faça uma pergunta..."
        type="text"
        name="prompt-area"
        autocomplete="on"
        onKeyDown={onKeyDown}
      />
      <Button
        className="absolute right-2 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
        name="enter-prompt"
        type="button"
        onClick={onClick}
      >
        <SendHorizonal size={18} />
      </Button>
    </div>
  );
}
