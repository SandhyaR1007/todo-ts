export interface AuthContextType {
  userInfo: UserInfo;
  token: string | null;
}

export type UserInfo = {
  userName: string;
  password: string;
};
