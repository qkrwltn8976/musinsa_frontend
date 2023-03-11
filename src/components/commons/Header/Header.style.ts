import styled from "@emotion/styled";
import Box from "../../../styles/box";

export const Base = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  max-width: 768px;
  transition: top 300ms cubic-bezier(0.37, 0, 0.63, 1) 0s;
`;

export const Container = styled(Box)`
  padding: 20px 20px 15px;
  max-width: 768px;
  height: 50px !important;
`;
