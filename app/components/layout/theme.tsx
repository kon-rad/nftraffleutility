import * as React from "react";
import GlobalData from "../../content/global/index.json";

const ThemeContext = React.createContext(GlobalData.theme);

export const useTheme = () => React.useContext(ThemeContext);

// pallette 
// https://colorhunt.co/palette/293462f24c4cec9b3bf7d716
// #293462
// #F24C4C
// #EC9B3B
// #F7D716
// https://colorhunt.co/palette/f39189bb80826e7582046582
// #F39189
// #BB8082
// #6E7582
// #046582
// https://colorhunt.co/palette/f67280c06c846c5b7b355c7d
// #F39189
// #BB8082
// #6E7582
// #046582


const updateRenderColorMode = (themeMode: "dark" | "light") => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.remove("light");
    root.classList.add(themeMode);
  }
};

const getUserSystemDarkMode = () => {
  if (typeof window !== "undefined") {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

export const Theme = ({ data, children }) => {
  const [systemDarkMode, setSystemDarkMode] = React.useState(
    getUserSystemDarkMode()
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

      const updateSystemMediaPreference = (event) => {
        setSystemDarkMode(event.matches ? "dark" : "light");
      };

      userMedia.addEventListener("change", updateSystemMediaPreference);

      return () =>
        userMedia.removeEventListener("change", updateSystemMediaPreference);
    }
    return;
  }, [setSystemDarkMode]);

  const {
    color = "blue",
    icon = "boxicon",
    font = "sans",
    darkMode = "system",
  } = data;

  React.useEffect(() => {
    updateRenderColorMode(
      darkMode === "system"
        ? systemDarkMode
        : darkMode !== ""
        ? darkMode
        : "light"
    );
  }, [systemDarkMode, darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        color,
        icon,
        font,
        darkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
