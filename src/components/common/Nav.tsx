import styled from "@emotion/styled";
import { Button } from "antd";
import AccessTokenContext from "contexts/AccessTokenContext";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  useEffect(() => {}, [accessToken]);

  const onClickLogout = () => {
    localStorage.removeItem("access_token");
    setAccessToken("");
  };

  return (
    <Navbar>
      <Link to="/">
        <LogoImg
          src="https://camo.githubusercontent.com/610a398f79b84273e9306ec9f58eeebb25aa7b8bab5563ceb3448646a5be4ebd/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d7472616e73706172656e7426636f6c6f723d6175746f26637573746f6d436f6c6f724c6973743d3236266865696768743d3135302673656374696f6e3d68656164657226746578743d497427732532304e6125323047697468756226666f6e7453697a653d393026616e696d6174696f6e3d66616465496e"
          alt="Na Github"
        />
      </Link>
      <ButtonDiv>
        {accessToken ? (
          <>
            <Button onClick={onClickLogout}>로그아웃</Button>
          </>
        ) : (
          <>
            <Link to="signin">
              <Button>로그인</Button>
            </Link>
            <Link to="signup">
              <Button>회원가입</Button>
            </Link>
          </>
        )}
      </ButtonDiv>
    </Navbar>
  );
};

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 15px 15px;
`;

const LogoImg = styled.img`
  display: block;
  width: 20rem;
  height: 5vh;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  gap: 15px;

  Button {
    width: 6rem;
    height: 2.5rem;
    font-size: 1rem;
  }
`;

export default Nav;
