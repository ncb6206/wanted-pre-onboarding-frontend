import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";

const CardLayout = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  Button {
    width: 250px;
    height: 50px;
    font-size: 30px;
  }
`;

const LogoImg = styled.img`
  display: block;
  width: 300px;
  height: 130px;
  margin: 0 auto;
`;

const P = styled.p`
  text-align: center;
  font-size: 25px;
  margin: 30px 0;
`;

export default function RootPage() {
  return (
    <React.Fragment>
      <CardLayout>
        <LogoImg alt="원티드 프리온보딩 프론트엔드" src="/images/logo.png" />
        <P>TodoList</P>
        <ButtonDiv>
          <Link to={`signin`}>
            <Button>로그인</Button>
          </Link>
          <Link to={`signup`}>
            <Button>회원가입</Button>
          </Link>
          <Link to={`todo`}>
            <Button>Todo List</Button>
          </Link>
        </ButtonDiv>
      </CardLayout>
    </React.Fragment>
  );
}
