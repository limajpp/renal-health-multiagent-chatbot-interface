import Image from "../../ui/Image";
import { useAuth } from "../../../store/AuthContext";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import PromptArea from "./PromptArea";
import { useChatbotTheme } from "../../../store/ChatbotThemeContext";

interface DefaultChatbotProps {
  setPrompted: Dispatch<SetStateAction<boolean>>;
  setInitialPrompt: Dispatch<SetStateAction<string>>;
}

export default function DefaultChatbot({
  setPrompted,
  setInitialPrompt,
}: DefaultChatbotProps) {
  const [error, setError] = useState<string>("");
  const { userName } = useAuth();
  const theme = useChatbotTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  function handlePrompt() {
    const value = inputRef.current?.value.trim() ?? "";
    if (!value) {
      setError("O prompt não pode estar vazio...");
      return;
    }

    if (value.length > 500) {
      setError("O prompt deve ter no maximo 500 caracteres.");
      return;
    }

    setError("");
    setInitialPrompt(value);
    if (inputRef.current) inputRef.current.value = "";
    setPrompted(true);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 gap-6">
      <div className="flex flex-row items-center justify-center gap-3">
        <Image
          src={theme.agentImage}
          alt={theme.agentAlt}
          className="h-16 w-auto object-contain"
        />
        <div className="flex flex-col">
          <h1
            className={`text-2xl font-black ${theme.accentText}`}
          >{`Bem-vindo(a) ${userName}!`}</h1>
          <p className="text-xs text-slate-500">Como posso ajudar?</p>
        </div>
      </div>
      <div className="w-full max-w-lg">
        <PromptArea
          ref={inputRef}
          onClick={handlePrompt}
          onKeyDown={(e) => {
            if (e.key === "Enter") handlePrompt();
          }}
        />
      </div>
      {error && <p className="px-4 pb-1 text-red-500 font-semibold">{error}</p>}
    </div>
  );
}
