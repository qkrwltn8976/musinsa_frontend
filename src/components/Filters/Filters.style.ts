import styled from "@emotion/styled";
import { Row } from "../../styles/box";
import { palette } from "../../styles/palette";

export const Base = styled(Row)`
  gap: 15px;
`;

export const Item = styled.div`
  background: ${palette.lightBlue[100]};
  border-radius: 8px;
  height: 32px;
`;
