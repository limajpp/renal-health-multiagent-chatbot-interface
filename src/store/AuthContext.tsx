import { createContext, useContext, useState } from "react";

type AuthContextType = {
  userName: string | null;
  login: (userName: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [userName, setUserName] = useState<string | null>(null);

  function login(name: string) {
    setUserName(name);
  }

  function logout() {
    setUserName(null);
  }

  const ctx = {
    userName,
    login,
    logout,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("'useAuth' must be used inside 'AuthProvider'.");
  return context;
}
