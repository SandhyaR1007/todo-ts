import { createContext, useContext, useState } from "react";
import { ArgType, AuthContextType, UserInfo } from "../types/authTypes";

import { loginService } from "../fakeService";
import { encryptData } from "../utils";
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthContextProviderProps {
  children: React.ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [userInfo, setUserInfo] = useState<string>(
    localStorage.getItem("userInfo") ?? ""
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = (userDetails: ArgType) => {
    setLoading(true);
    const encryptedData = encryptData(userDetails);

    setTimeout(() => {
      let response = loginService(encryptedData);
      if (response?.success === true) {
        if (response?.token) {
          localStorage.setItem("token", response?.token);
          setToken(response?.token);
        }
        if (response?.userInfo) {
          localStorage.setItem("userInfo", JSON.stringify(response?.userInfo));
          setUserInfo(JSON.stringify(response?.userInfo));
        }
      } else {
        setError("Invalid Credentials");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
      setLoading(false);
    }, 2000);
  };
  const logout = () => {
    setToken(null);
    setUserInfo("");
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
  };
  return (
    <AuthContext.Provider
      value={{ userInfo, token, login, loading, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
