import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "antd";

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function RootPage() {
  return (
    <React.Fragment>
      <RootDiv>
        <Link to={`signin`}>
          <Button>로그인</Button>
        </Link>
        <Link to={`signup`}>
          <Button>회원가입</Button>
        </Link>
        <Link to={`todo`}>
          <Button>Todo List</Button>
        </Link>
      </RootDiv>
    </React.Fragment>
  );
}
