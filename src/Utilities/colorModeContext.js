// import { createContext, useContext, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentTheme } from "../features/themeSlice"; // Redux slice to manage themes

// export const ColorModeContext = createContext();

// export const ColorModeProvider = ({ children }) => {
//   const dispatch = useDispatch();
//   const { themes, currentTheme } = useSelector((state) => state.theme); // Get themes from Redux
//   const isDarkMode = currentTheme?.mode === "dark";

//   // Function to toggle between light and dark modes
//   const toggleColorMode = () => {
//     const newTheme = isDarkMode
//       ? themes.find((theme) => theme.mode === "light") // Find the light theme
//       : themes.find((theme) => theme.mode === "dark"); // Find the dark theme

//     if (newTheme) {
//       dispatch(setCurrentTheme(newTheme)); // Set the new theme in Redux
//     }
//   };

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode,
//     }),
//     [themes, currentTheme]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       {children}
//     </ColorModeContext.Provider>
//   );
// };
