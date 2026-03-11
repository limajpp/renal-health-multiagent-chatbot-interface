import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPasswordForm.tsx";
import AgentSelection from "./components/AgentSelection/AgentSelection.tsx";
import { AuthProvider } from "./store/AuthContext.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/agent-selection" element={<AgentSelection />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
