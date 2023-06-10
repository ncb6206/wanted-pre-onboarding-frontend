import { Card, Button, Input, Modal } from "antd";
import styled from "@emotion/styled";
import { backUrl } from "api/backUrl";
import axios from "axios";
import useInput from "hooks/useInput";
import React, { useCallback, useEffect, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import ToHomeButton from "components/toHome";

const CardLayout = styled(Card)`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  p {
    text-align: center;
    font-size: 30px;
  }

  label {
    width: 100%;
    text-align: left;
    font-size: 20px;
  }

  Button {
    width: 100%;
    margin-top: 20px;
  }
`;

export default function SignInPage() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const [disable, setDisable] = useState(true);
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  useEffect(() => {
    if (accessToken) {
      return navigate("/todo");
    }
  }, [accessToken, navigate]);

  const onSubmitForm = useCallback(
    async (event: MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      await axios
        .post(
          `${backUrl}/auth/signin`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            Modal.success({ content: "로그인되었습니다." });
            localStorage.setItem("access_token", res.data.access_token);
            return navigate("/todo");
          }
        })
        .catch((err) => {
          // console.error(err);
          Modal.error({ content: err.message });
        });
    },
    [email, navigate, password]
  );

  useEffect(() => {
    if (!!email.match(/.*@.*/) && !!password.match(/^.{8,}$/)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <CardLayout>
        <LoginForm onSubmit={onSubmitForm}>
          <p>로그인</p>
          <label htmlFor="email-input">이메일</label>
          <Input
            data-testid="email-input"
            id="email-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
          <label htmlFor="password-input">패스워드</label>
          <Input
            data-testid="password-input"
            id="password-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <Button data-testid="signin-button" htmlType="submit" type="primary" disabled={disable}>
            로그인
          </Button>
        </LoginForm>
      </CardLayout>
      <ToHomeButton />
    </React.Fragment>
  );
}
