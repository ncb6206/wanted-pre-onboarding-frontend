import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
