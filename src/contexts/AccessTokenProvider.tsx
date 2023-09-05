import { ReactNode, useState } from "react";
import AccessTokenContext from "./AccessTokenContext";

const AccessTokenProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export default AccessTokenProvider;
