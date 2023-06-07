import { createContext, useContext, useState } from "react";
import { AuthContextType, UserInfo } from "../types/authTypes";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthContextProviderProps {
  children: React.ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  return (
    <AuthContext.Provider value={{ userInfo, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
