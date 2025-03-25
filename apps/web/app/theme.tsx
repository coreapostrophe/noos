"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const NoosTheme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: true,
    light: true,
  },
  typography: { allVariants: { fontFamily: "Inter" } },
});

const NoosThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={NoosTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default NoosThemeProvider;
