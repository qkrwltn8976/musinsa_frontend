import styled from "@emotion/styled";
import Box from "../../../styles/box";
import { palette } from "../../../styles/palette";

export const Base = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  transition: top 300ms cubic-bezier(0.37, 0, 0.63, 1) 0s;
  z-index: 1;
  background-color: ${palette.gray[100]};
`;

export const Container = styled(Box)`
  padding: 20px 20px 15px;

  height: 50px !important;
`;
