import * as CryptoJS from "crypto-js";
import { UserInfo } from "./types/authTypes";

const ENCRYPTION_KEY = "key";
export const encryptData = (data: object): string => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    ENCRYPTION_KEY
  ).toString();
  return ciphertext;
};

export const decryptData = (ciphertext: string): UserInfo => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

export const checkDisable = (text: string) =>
  text.trim().replace(" ", "").length;
