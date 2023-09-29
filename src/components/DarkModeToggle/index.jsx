import React from "react";
import {DarkModeToggle as DarkModeToggle2} from "react-dark-mode-toggle-2";
import {useColorScheme} from "../../context/color-scheme.context";

export const DarkModeToggle = () => {
  const {isDark, setIsDark} = useColorScheme();
  return (
    <DarkModeToggle2
      onChange={setIsDark}
      isDarkMode={isDark}
      size={'50px'}
    />
  );
};
//Apague a luz, faz favor