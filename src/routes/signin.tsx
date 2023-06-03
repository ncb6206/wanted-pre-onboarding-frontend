import { Card, Button, Input, Modal } from "antd";
import styled from "@emotion/styled";
import { backUrl } from "api/backUrl.";
import axios from "axios";
import useInput from "hooks/useInput";
import React, { useCallback, useEffect, useState, MouseEvent } from "react";
import { redirect, useNavigate } from "react-router-dom";

const CardLayout = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  label {
    width: 100%;
    text-align: left;
  }

  Button {
    width: 100%;
  }
`;

export default function SignInPage() {
  const [disable, setDisable] = useState(true);
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");
  const navigate = useNavigate();

  if (localStorage.getItem("access_token")) {
    redirect("/todo");
  }

  const onSubmitForm = useCallback(
    async (event: MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
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
            console.log(res);
            if (res.status === 200) {
              Modal.success({ content: "로그인되었습니다." });
              localStorage.setItem("access_token", res.data.access_token);
              return navigate("/todo");
            }
          })
          .catch((err) => {
            console.error(err);
            Modal.error({ content: err.message });
          });
      } catch (err) {
        console.error(err);
        Modal.error({ content: "에러가 발생하였습니다" });
      }
    },
    [email, password, navigate]
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
      <div>
        <CardLayout>
          <LoginForm onSubmit={onSubmitForm}>
            <h1>로그인</h1>
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
      </div>
    </React.Fragment>
  );
}
