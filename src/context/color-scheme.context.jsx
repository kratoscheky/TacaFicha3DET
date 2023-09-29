import React, {createContext, useContext, useEffect, useMemo} from "react";
import {useMediaQuery} from "react-responsive";
import createPersistedState from "use-persisted-state";

const useColorSchemeState = createPersistedState("colorScheme");


export const ColorSchemeContext = createContext();

export const useColorScheme = () => useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({children}) => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return (
    <ColorSchemeContext.Provider
      value={{
        isDark: value,
        setIsDark,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};
