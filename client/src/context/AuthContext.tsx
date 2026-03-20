import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { getMe } from "../services/auth.service";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string) => void;
  guestLogin: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isGuest = localStorage.getItem("isGuest");
    if (isGuest) {
      setUser({ id: "guest", name: "Guest User", email: "guest@example.com" });
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token");
    if (token) {
      getMe()
        .then((data) => setUser(data.user))
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = (token: string) => {
    localStorage.removeItem("isGuest");
    localStorage.setItem("token", token);
    getMe()
      .then((data) => setUser(data.user))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      });
  };

  const guestLogin = () => {
    localStorage.setItem("isGuest", "true");
    localStorage.removeItem("token");
    setUser({ id: "guest", name: "Guest User", email: "guest@example.com" });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isGuest");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, guestLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}