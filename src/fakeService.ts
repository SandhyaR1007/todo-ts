import user from "./userInfo.json";
import { decryptData } from "./utils";
export const loginService = (encryptedData: string) => {
  const decryptedData = decryptData(encryptedData) as Record<string, any>;
  console.log(decryptedData);
  if (
    decryptedData?.email === user.email &&
    decryptedData?.password === user.password
  ) {
    return { success: true, token: encryptedData, userInfo: decryptedData };
  } else {
    return { success: false };
  }
};
