import { createContext, useContext, type ReactNode } from "react";
import hemoAgentPic from "../assets/hemodialysis-agent-picture.png";
import dialAgentPic from "../assets/dialysis-agent-picture.png";

export type AgentType = "hemo" | "dial";

export interface ChatbotTheme {
  agentType: AgentType;
  pageBg: string;
  navbarBorder: string;
  accentButton: string;
  accentSoftBg: string;
  accentSoftBorder: string;
  accentText: string;
  scrollbarThumb: string;
  agentImage: string;
  agentAlt: string;
}

const THEMES: Record<AgentType, ChatbotTheme> = {
  hemo: {
    agentType: "hemo",
    pageBg: "bg-blue-100",
    navbarBorder: "border-blue-100",
    accentButton: "bg-sky-600 hover:bg-sky-700",
    accentSoftBg: "bg-blue-50",
    accentSoftBorder: "border-blue-200",
    accentText: "text-sky-600",
    scrollbarThumb:
      "[&::-webkit-scrollbar-thumb]:bg-blue-200 hover:[&::-webkit-scrollbar-thumb]:bg-blue-300",
    agentImage: hemoAgentPic,
    agentAlt:
      "Dialysis filter icon with fluid inside, arrows indicating filtration flow, and droplets exiting the device.",
  },
  dial: {
    agentType: "dial",
    pageBg: "bg-orange-100",
    navbarBorder: "border-orange-100",
    accentButton: "bg-orange-600 hover:bg-orange-700",
    accentSoftBg: "bg-orange-50",
    accentSoftBorder: "border-orange-200",
    accentText: "text-orange-600",
    scrollbarThumb:
      "[&::-webkit-scrollbar-thumb]:bg-orange-200 hover:[&::-webkit-scrollbar-thumb]:bg-orange-300",
    agentImage: dialAgentPic,
    agentAlt:
      "Peritoneal dialysis icon with abdominal cavity and catheter indicating fluid exchange via peritoneal membrane.",
  },
};

const ChatbotThemeContext = createContext<ChatbotTheme | null>(null);

interface ChatbotThemeProviderProps {
  children: ReactNode;
  agentType: AgentType;
}

export function ChatbotThemeProvider({
  children,
  agentType,
}: ChatbotThemeProviderProps) {
  return (
    <ChatbotThemeContext.Provider value={THEMES[agentType]}>
      {children}
    </ChatbotThemeContext.Provider>
  );
}

export function useChatbotTheme() {
  const context = useContext(ChatbotThemeContext);
  if (!context)
    throw new Error(
      "'useChatbotTheme' must be used inside ChatbotThemeProvider.",
    );
  return context;
}
