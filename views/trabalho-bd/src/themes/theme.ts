import { createTheme } from "@mui/material/styles";
import light from "./light";
import dark from "./dark";

declare module "@mui/material/styles" {
  interface Palette {
    color: CustomColors;
  }

  interface PaletteOptions {
    color?: CustomColors;
  }

  interface CustomColors {
    backgroundColor: string;
    panel: string;
    primaryTextColor: string;
    secundaryTextColor: string;
    action1: string;
    action2: string;
    highlight: string;
    glassBlur: string;
  }
}

export const lightTheme = createTheme({
  palette: light,
});

export const darkTheme = createTheme({
  palette: dark,
});