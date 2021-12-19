import { createContext } from "react";
  
export const PasswordContext = createContext({
    password: "", // default value
    updatePassword: () => {},
});