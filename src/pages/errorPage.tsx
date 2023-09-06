import styled from "@emotion/styled";
import * as React from "react";

export default function ErrorPage() {
  return (
    <React.Fragment>
      <div id="errorPage">
        <H1>이런!</H1>
        <P>죄송합니다. 예상치 못한 오류가 발생하였습니다.</P>
        <P>좌측 상단의 로고를 눌러 홈화면으로 돌아가세요.</P>
      </div>
    </React.Fragment>
  );
}

const H1 = styled.h1`
  text-align: center;
  font-size: 6rem;
  margin: 15px 0;
  font-family: "Black Han Sans", sans-serif;
  color: #57648c;
`;

const P = styled.p`
  text-align: center;
  font-size: 3rem;
  margin: 15px 0;
  font-family: "Black Han Sans", sans-serif;
`;
