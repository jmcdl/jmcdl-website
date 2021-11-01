import { Global, css, ThemeProvider, Theme } from "@emotion/react";

export function App(): JSX.Element {
  const globalStyles = css`
    html,
    body,
    #home {
      height: 100%;
    }
  `;
  console.log("globalStyles", globalStyles);

  const theme: Theme = {
    colors: {
      black: "#111",
      primary: "#9cb9dd",
      primaryDark: "#6d88a9",
      white: "#fff",
    },
    breakpoints: {
      large: "1024px",
      medium: "768px",
      small: "640px",
    },
    fonts: {
      bold: "Lato Bold, sans-serif",
      light: "Lato Light, sans-serif",
      regular: "Lato, sans-serif",
    },
  };

  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
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
        <h1>Hello</h1>
        <h1>Hello</h1>
      </ThemeProvider>
    </>
  );
}
