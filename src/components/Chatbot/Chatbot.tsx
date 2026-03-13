import Navbar from "../ui/Navbar";
import Image from "../ui/Image";
import profilePic from "../../assets/default-profile-picture.png";
import Button from "../ui/Button";
import { useAuth } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import Dialog, { type DialogHandle } from "../ui/Dialog";
import { useRef } from "react";
import Chat from "./Chat/Chat";
import {
  ChatbotThemeProvider,
  useChatbotTheme,
  type AgentType,
} from "../../store/ChatbotThemeContext";

interface ChatbotProps {
  agentType: AgentType;
}

function ChatbotContent() {
  const navigate = useNavigate();
  const { userName } = useAuth();
  const theme = useChatbotTheme();
  const dialogRef = useRef<DialogHandle>(null);

  function handleGoBack() {
    dialogRef.current?.showModal();
  }

  function handleConfirmGoBack() {
    navigate(-1);
  }

  return (
    <div
      className={`flex flex-col gap-4 h-screen w-full p-4 md:p-6 overflow-hidden ${theme.pageBg}`}
    >
      <Navbar
        className={`mx-auto w-full max-w-6xl rounded-2xl border bg-white/90 shadow-lg backdrop-blur ${theme.navbarBorder}`}
      >
        <ul className="flex w-full items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <li>
            <div className="flex items-center">
              <Image
                className={"h-12 w-auto object-contain rounded-full"}
                src={profilePic}
                alt="User profile silhouette inside a circular badge with abstract network nodes and data filtering icons in the background, suggesting an AI or data-processing agent."
              />
              <div className="leading-tight">
                {/* TODO: Change to actual user name later... */}
                <h1 className="text-sm font-semibold text-slate-800 md:text-base">
                  {userName}
                </h1>
                <p className="text-xs text-slate-500">Sessão ativa</p>
              </div>
            </div>
          </li>
          <li>
            <Button
              name="logout"
              type="button"
              onClick={handleGoBack}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors"
            >
              Voltar
            </Button>
          </li>
        </ul>
      </Navbar>
      <Chat />
      <Dialog
        ref={dialogRef}
        target={document.getElementById("modal") ?? document.body}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-semibold text-slate-800">Voltar</h2>
            <p className="text-sm text-slate-500">
              Tem certeza que deseja retornar para escolher outro agente?
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              name="cancelLogout"
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors"
            >
              Cancelar
            </Button>
            <Button
              name="confirmLogout"
              type="button"
              onClick={handleConfirmGoBack}
              className={`rounded-xl px-4 py-2 text-sm font-semibold text-white cursor-pointer transition-colors ${theme.accentButton}`}
            >
              Voltar
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default function Chatbot({ agentType }: ChatbotProps) {
  return (
    <ChatbotThemeProvider agentType={agentType}>
      <ChatbotContent />
    </ChatbotThemeProvider>
  );
}
