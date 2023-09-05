import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <Wrap>
      <Nav />
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20rem;
  background-color: #f4f3ea;
`;

export default Layout;
