export interface AuthContextType {
  userInfo: UserInfo;
  token: string | null;
  login: (userDetails: ArgType) => void;
  loading: boolean;
  logout: () => void;
  error: string;
}

export interface ArgType {
  email: string;
  password: string;
}
export type UserInfo =
  | {
      email: string;
      password: string;
    }
  | null
  | string;
