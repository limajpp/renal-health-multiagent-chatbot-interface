import Navbar from "../ui/Navbar";
import Image from "../ui/Image";
import profilePic from "../../assets/default-profile-picture.png";
import logo from "../../assets/renal-health-multiagent-chatbot-logo.png";

export default function AgentSelection() {
  return (
    <div className="min-h-screen w-full bg-slate-100 p-4 md:p-6">
      <Navbar className="mx-auto w-full max-w-6xl rounded-2xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur">
        <ul className="flex w-full items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <li>
            <div className="flex items-center gap-3">
              <Image
                className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200 md:h-12 md:w-12"
                src={profilePic}
                alt="User profile silhouette inside a circular badge with abstract network nodes and data filtering icons in the background, suggesting an AI or data-processing agent."
              />
              <div className="leading-tight">
                {/* TODO: Change to actual user name later... */}
                <h1 className="text-sm font-semibold text-slate-800 md:text-base">
                  Cláudio Bezerra
                </h1>
                <p className="text-xs text-slate-500">Sessão ativa</p>
              </div>
            </div>
          </li>
          <li>
            <Image
              className="h-10 w-auto object-contain md:h-12"
              src={logo}
              alt="Renal Health Multiagent Chatbot logo"
            />
          </li>
        </ul>
      </Navbar>
    </div>
  );
}
