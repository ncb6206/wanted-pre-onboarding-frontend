import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
          <Button variant="outlined">로그인</Button>
        </Link>
        <Link to={`signup`}>
          <Button variant="outlined">회원가입</Button>
        </Link>

        <Button variant="outlined">Todo List</Button>
      </RootDiv>
    </React.Fragment>
  );
}
