import { createContext } from "react";

const AccessTokenDefault = {
  accessToken: "",
  setAccessToken: (value: string) => {},
};

const AccessTokenContext = createContext(AccessTokenDefault);

export default AccessTokenContext;
