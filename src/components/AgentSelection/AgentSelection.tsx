import Navbar from "../ui/Navbar";
import Image from "../ui/Image";
import profilePic from "../../assets/default-profile-picture.png";
import hemoAgentPic from "../../assets/hemodialysis-agent-picture.png";
import dialAgentPic from "../../assets/dialysis-agent-picture.png";
import Card from "../ui/Card";
import Button from "../ui/Button";
import AgentSelectionRadioCard from "./AgentSelectionRadioCard";
import { useNavigate } from "react-router-dom";
import { useRef, useState, type MouseEvent } from "react";
import { useAuth } from "../../store/AuthContext";
import Dialog, { type DialogHandle } from "../ui/Dialog";

export default function AgentSelection() {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();
  const dialogRef = useRef<DialogHandle>(null);

  function handleLogout() {
    dialogRef.current?.showModal();
  }

  function confirmLogout() {
    logout();
    navigate("/login");
  }
  const [agent, setAgent] = useState<"unselected" | "hemo" | "dial">(
    "unselected",
  );
  const [startChatBot, setStartChatBot] = useState<"idle" | "clicked">("idle");

  function handleStartChatBot(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setStartChatBot("clicked");

    if (agent === "unselected") return;

    navigate(`/${agent}-chatbot`);
  }

  return (
    <div className="flex flex-col gap-8 min-h-screen w-full bg-slate-100 p-4 md:p-6">
      <Navbar className="mx-auto w-full max-w-6xl rounded-2xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur">
        <ul className="flex w-full items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <li>
            <div className="flex items-center">
              <Image
                className="h-12 w-auto object-contain"
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
              onClick={handleLogout}
              className="bg-slate-300 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 cursor-pointer hover:bg-slate-400 hover:text-slate-50 transition-colors"
            >
              Sair
            </Button>
          </li>
        </ul>
      </Navbar>
      <Card className="flex flex-col mx-auto my-auto w-full max-w-xl gap-8 rounded-2xl border border-slate-200 bg-white/90 px-8 py-10 shadow-lg backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-base font-semibold text-slate-800 md:text-lg">
            Selecione o Agente de Suporte Clínico
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Escolha o contexto de tratamento para iniciar o chatbot
          </p>
        </div>
        <div className="flex w-full flex-row gap-4">
          <AgentSelectionRadioCard
            onClick={() => setAgent("hemo")}
            className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-md hover:border-slate-300 hover:bg-white"
            imageSrc={hemoAgentPic}
            imageAlt="Dialysis filter icon with fluid inside, arrows indicating filtration flow, and droplets exiting the device."
            title="Agente de Hemodiálise"
            description="Suporte especializado para filtragem sanguínea extracorpórea."
          />
          <AgentSelectionRadioCard
            onClick={() => setAgent("dial")}
            className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:shadow-md hover:border-slate-300 hover:bg-white"
            imageSrc={dialAgentPic}
            imageAlt="Peritoneal dialysis icon with abdominal cavity and catheter indicating fluid exchange via peritoneal membrane."
            title="Agente de Diálise Peritoneal"
            description="Suporte especializado para tratamento via membrana peritoneal."
          />
        </div>
        {startChatBot === "clicked" && agent === "unselected" && (
          <p className="font-black text-red-500 text-center">
            Please select one of the options above.
          </p>
        )}
        <Button
          name="chooseAgent"
          onClick={(event) => handleStartChatBot(event)}
          type="submit"
          className="w-full rounded-xl bg-slate-600 p-2 font-black text-white cursor-pointer hover:bg-slate-700"
        >
          Iniciar Chatbot
        </Button>
      </Card>
      <Dialog
        ref={dialogRef}
        target={document.getElementById("modal") ?? document.body}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-semibold text-slate-800">
              Confirmar logout
            </h2>
            <p className="text-sm text-slate-500">
              Tem certeza que deseja encerrar a sessão?
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
              onClick={confirmLogout}
              className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white cursor-pointer hover:bg-red-600 transition-colors"
            >
              Sair
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
