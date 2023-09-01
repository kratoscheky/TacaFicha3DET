import React, { createContext, useContext, useEffect, useState } from "react";

const BrowserContext = createContext();

export const useBrowserContext = () => useContext(BrowserContext);

export const BrowserProvider = ({ children }) => {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isFirefoxBrowser = userAgent.includes("firefox") || userAgent.includes("firefox android");
    setIsFirefox(isFirefoxBrowser);
  }, []);

  return (
    <BrowserContext.Provider
      value={{
        isFirefox
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
};
