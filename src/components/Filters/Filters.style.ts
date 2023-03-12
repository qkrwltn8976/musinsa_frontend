import styled from "@emotion/styled";
import { Row } from "../../styles/box";
import { palette } from "../../styles/palette";

export const Base = styled(Row)`
  gap: 15px;
`;

export const Item = styled.button`
  background: ${palette.gray[200]};
  color: ${palette.gray[500]};
  border: none;
  border-radius: 8px;
  height: 32px;
  cursor: pointer;

  &:hover,
  &.active {
    background: ${palette.lightBlue[50]};
    color: ${palette.blue[900]};
  }
`;
