import Image from "../../ui/Image";
import profilePic from "../../../assets/default-profile-picture.png";
import PromptArea from "./PromptArea";
import { useEffect, useRef, useState } from "react";
import { useChatbotTheme } from "../../../store/ChatbotThemeContext";

type Message = {
  userPrompt: string;
  chatAnswer: string;
};

interface PromptedChatbotProps {
  initialPrompt: string;
}

export default function PromptedChatbot({
  initialPrompt,
}: PromptedChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string>("");
  const theme = useChatbotTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialPrompt || messages.length > 0) return;

    setMessages([{ userPrompt: initialPrompt, chatAnswer: "XD" }]);
  }, [initialPrompt, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSendPrompt() {
    const value = inputRef.current?.value.trim() ?? "";

    if (!value) {
      setError("O prompt não pode ser vazio...");
      return;
    }

    if (value.length > 500) {
      setError("O prompt deve ter no maximo 500 caracteres.");
      return;
    }

    setError("");
    setMessages((prev) => [...prev, { userPrompt: value, chatAnswer: "XD" }]);
    if (inputRef.current) inputRef.current.value = "";
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSendPrompt();
  }

  return (
    <div className="flex flex-col h-full">
      <ul
        className={`flex-1 overflow-y-auto p-4 flex flex-col gap-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full ${theme.scrollbarThumb}`}
      >
        {messages.map((message, index) => (
          <li key={index} className="flex flex-col gap-2">
            <article className="flex flex-row-reverse items-end gap-2">
              <Image
                className="h-8 w-8 rounded-full object-cover shrink-0 ring-2 ring-slate-200"
                src={profilePic}
                alt="User profile avatar"
              />
              <p
                className={`text-white rounded-2xl rounded-br-sm px-4 py-2 text-sm max-w-[75%] ${theme.accentButton}`}
              >
                {message.userPrompt}
              </p>
            </article>
            {message.chatAnswer && (
              <article className="flex flex-row items-end gap-2">
                <Image
                  className="h-8 w-8 rounded-full object-cover shrink-0 ring-2 ring-slate-100"
                  src={theme.agentImage}
                  alt={theme.agentAlt}
                />
                <p
                  className={`text-slate-700 border rounded-2xl rounded-bl-sm px-4 py-2 text-sm max-w-[75%] ${theme.accentSoftBg} ${theme.accentSoftBorder}`}
                >
                  {message.chatAnswer}
                </p>
              </article>
            )}
          </li>
        ))}
        <div ref={bottomRef} />
      </ul>
      {error && <p className="px-4 pb-1 text-red-500 font-semibold">{error}</p>}
      <div className="border-t border-slate-100 px-4 py-3">
        <PromptArea
          ref={inputRef}
          onClick={handleSendPrompt}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
