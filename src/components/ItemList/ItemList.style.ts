import styled from "@emotion/styled";
import { Column, Row } from "../../styles/box";
import { Large, Size, Small, Weight } from "../../styles/font";
import { palette } from "../../styles/palette";

export const Base = styled(Column)`
  padding: 10px 20px 0px;
  width: 100%;
`;

export const ItemBox = styled(Column)`
  padding: 16px;
  width: 375px;
  height: 100px;
  gap: 10px;
`;

export const InfoWrapper = styled(Row)``;

export const Title = styled.p`
  color: ${palette.gray[600]};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Alias = styled.p`
  ${Size.Regular}
  ${Weight.Bold}
  color: ${palette.gray[600]};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Info = styled.p`
  ${Small.None.Medium};
  color: ${palette.gray[400]};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.p`
  ${Large.Normal.Bold}
  color: ${palette.blue[700]};
  + p {
    margin-left: 10px;
  }
`;

export const DetailWrapper = styled(Column)`
  gap: 10px;
`;
export const DeleteButton = styled.div`
  cursor: pointer;
  display: inline;

  & > img {
    width: 15px;
    height: 15px;
  }
`;
