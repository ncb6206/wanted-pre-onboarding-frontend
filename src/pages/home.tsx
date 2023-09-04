import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";

export default function HomePage() {
  return (
    <React.Fragment>
      <CardLayout>
        <Link to="https://github.com/ncb6206/">
          <LogoImg
            src="https://camo.githubusercontent.com/610a398f79b84273e9306ec9f58eeebb25aa7b8bab5563ceb3448646a5be4ebd/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d7472616e73706172656e7426636f6c6f723d6175746f26637573746f6d436f6c6f724c6973743d3236266865696768743d3135302673656374696f6e3d68656164657226746578743d497427732532304e6125323047697468756226666f6e7453697a653d393026616e696d6174696f6e3d66616465496e"
            alt="Na Github"
          />
        </Link>
        <P>TodoList</P>
        <ButtonDiv>
          <Link to={`signin`}>
            <Button>로그인</Button>
          </Link>
          <Link to={`signup`}>
            <Button>회원가입</Button>
          </Link>
          <Link to={`todo`}>
            <Button>투두리스트</Button>
          </Link>
        </ButtonDiv>
      </CardLayout>
    </React.Fragment>
  );
}

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
  width: 400px;
  height: 10vh;
  margin: 0 auto;
`;

const P = styled.p`
  text-align: center;
  font-size: 25px;
  margin: 30px 0;
`;
