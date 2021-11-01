import { Global, css } from "@emotion/react";

export function App(): JSX.Element {
  const globalStyles = css`
    html,
    body,
    #home {
      height: 100%;
    }
  `;
  console.log("globalStyles", globalStyles);

  return (
    <>
      {/*<Global styles={globalStyles} />*/}
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </>
  );
}
