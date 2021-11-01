import { css, Theme } from "@emotion/react";
import { contentContainer } from "../styles/styles";

export function NavBar(): JSX.Element {
  const navButtonStyle = (theme: Theme) => css`
    color: ${theme.colors.primary};
    padding: 0 0.8rem;
    text-decoration: none;
    font-size: 16px;
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.black};
      font-family: ${theme.fonts.bold};
      > a {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.black};
      }
    }
  `;

  return (
    <nav
      css={(theme) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        text-transform: uppercase;
        font-family: ${theme.fonts.light};
        line-height: 3rem;
        font-size: 12px;
        letter-spacing: 0.1rem;
        height: ${theme.constants.navbarHeight};
      `}
    >
      <div
        css={css`
          ${contentContainer};
          display: flex;
          justify-content: space-between;
        `}
      >
        <a href="/" css={navButtonStyle}> home </a>
        <div
          css={css`
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {/*<a*/}
          {/*  class="nav-button"*/}
          {/*  href="/blog"*/}
          {/*  target="_self"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Blog*/}
          {/*</a>*/}
          <a
            css={navButtonStyle}
            href="/old/resume.html"
            target="_self"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
