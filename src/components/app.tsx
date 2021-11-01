import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../styles/styles";
import { theme } from "../styles/theme";
import { NavBar } from "./nav-bar";

export function App(): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <NavBar />
        <h1
          css={(theme) => ({
            color: theme.colors.primary,
            fontFamily: theme.fonts.regular,
          })}
        >
          Hello
        </h1>
        <h1
          css={(theme) => ({
            color: theme.colors.primary,
            fontFamily: theme.fonts.light,
          })}
        >
          Hello
        </h1>
      </ThemeProvider>
    </>
  );
}
