import { css } from "styled-components";
const theme = {
  alert: {
    variant: {
      primary: css`
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
      `,
      secondary: css`
        color: #383d41;
        background-color: #e2e3e5;
        border-color: #d6d8db;
      `,
    },
  },
  button: {
    variant: {
      primary: css`
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      `,
      secondary: css`
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      `,
    },
    size: {
      lg: css`
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        border-radius: 0.3rem;
      `,
      sm: css`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
      `,
    },
  },
};

export default theme;
