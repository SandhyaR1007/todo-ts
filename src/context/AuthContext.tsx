import { createContext, useContext, useState } from "react";
import { ArgType, AuthContextType, UserInfo } from "../types/authTypes";
import user from "../userInfo.json";
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
  const [userInfo, setUserInfo] = useState<UserInfo>(
    localStorage.getItem("userInfo")
  );
  const [loading, setLoading] = useState<boolean>(false);

  const login = (userDetails: ArgType) => {
    setLoading(true);
    if (
      userDetails.email === user.email &&
      userDetails.password === user.password
    ) {
      setTimeout(() => {
        localStorage.setItem("token", "tokentokentokentoken");
        setToken("tokentokentokentoken");
        localStorage.setItem("userInfo", JSON.stringify(userDetails));
        setUserInfo(userDetails);
      }, 2000);
    } else {
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <AuthContext.Provider value={{ userInfo, token, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
