import { useState } from "react";
import DefaultChatbot from "./DefaultChatbot";
import PromptedChatbot from "./PromptedChatbot";

export default function Chat() {
  const [prompted, setPrompted] = useState<boolean>(false);
  const [initialPrompt, setInitialPrompt] = useState("");
  return (
    <div className="flex flex-col mx-auto w-full max-w-4xl flex-1 rounded-2xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur overflow-hidden">
      {prompted ? (
        <PromptedChatbot initialPrompt={initialPrompt} />
      ) : (
        <DefaultChatbot
          setPrompted={setPrompted}
          setInitialPrompt={setInitialPrompt}
        />
      )}
    </div>
  );
}
