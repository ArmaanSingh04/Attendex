import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { SERVER_URL } from "../constants";

interface AuthContextType {
  auth: boolean;
  isLoading: boolean;
  setAuth: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  isLoading: true,
  setAuth: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/api/profile`, {
          withCredentials: true
        });
        if (res.status === 200) {
          setAuth(true);
        }
      } catch (error) {
        setAuth(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const value: AuthContextType = {
    auth,
    isLoading,
    setAuth: (value) => setAuth(value)
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
