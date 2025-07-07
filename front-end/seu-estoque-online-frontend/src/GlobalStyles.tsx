import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      *, *::before, *::after {
        box-sizing: border-box;
      }

      html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      body {
        font-family: 'Roboto', sans-serif;
        background-color: #ebebeb;
        color: #333;
        display: flex;
        flex-direction: column;
      }

      #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);
