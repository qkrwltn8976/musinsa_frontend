import React from "react";
import * as S from "./Loading.style";
import Spinner from "../../../assets/img/spinner.gif";

const Loading = ({}) => {
  return (
    <S.Base>
      <img src={Spinner} alt="loading" width={"5%"} />
    </S.Base>
  );
};

export default Loading;
