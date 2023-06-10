import styled from "@emotion/styled";
import { Button } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = styled(Button)`
  margin-top: 30px;
  width: 200px;
  height: 50px;
  font-size: 20px;
`;

export default function ToHomeButton() {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return <HomeButton onClick={onClickHome}>홈으로</HomeButton>;
}
