import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

export default function ProtectedRoute() {
  const { userName } = useAuth();
  return userName ? <Outlet /> : <Navigate to="/login" replace />;
}
