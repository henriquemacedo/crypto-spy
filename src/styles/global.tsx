import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors, typography } from "./design-tokens";

const { regular, black, defaultSize, defaultLineHeight } = typography;
const { normal, background } = colors;

interface GlobalStylesProps {
  whiteColor?: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  html {
    box-sizing: border-box;
    font-size: ${defaultSize};
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans Mono', Verdana, Arial, Helvetica, monospace;
    font-size: ${rem("16px")};
    font-weight: ${regular};
    color: ${normal};
    line-height: ${defaultLineHeight};
    -webkit-font-smoothing: antialiased;
    background-color: ${background};
  }

  h2 {
    margin: 0;
    font-size: ${rem("20px")};
    font-weight: ${black};
  }
`;
