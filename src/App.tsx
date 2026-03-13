import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPasswordForm.tsx";
import AgentSelection from "./components/AgentSelection/AgentSelection.tsx";
import { AuthProvider } from "./store/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Chatbot from "./components/Chatbot/Chatbot.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/agent-selection" element={<AgentSelection />} />
          <Route path="/hemo-chatbot" element={<Chatbot agentType="hemo" />} />
          <Route path="/dial-chatbot" element={<Chatbot agentType="dial" />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
