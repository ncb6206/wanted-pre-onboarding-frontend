import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function HomePage() {
  return (
    <React.Fragment>
      <CardLayout>
        <H1>TodoList</H1>
        <P>
          시작하기 버튼을 눌러 <br />
          투두리스트를 시작해보세요!
        </P>
        <ButtonDiv>
          <Link to={`todo`}>
            <Button>시작하기</Button>
          </Link>
        </ButtonDiv>
      </CardLayout>
    </React.Fragment>
  );
}

const CardLayout = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 15px;

  Button {
    width: 250px;
    height: 50px;
    font-size: 30px;
  }
`;
