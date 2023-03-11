import { css } from "@emotion/react";

export const Large = {
  Normal: {
    Bold: css`
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    `,
  },
};

export const Small = {
  None: {
    Medium: css`
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
    `,
  },
  Tight: {
    Bold: css`
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    `,
  },
};

// export const Small = css`
// font-size: 14px;
// `
export const Size = {
  Small: css`
    font-size: 14px;
  `,
  Regular: css`
    font-size: 16px;
  `,
  Large: css`
    font-size: 18px;
  `,
};
export const Weight = {
  Medium: css`
    font-weight: 500;
  `,
  Bold: css`
    font-weight: 700;
  `,
};
