import styled from "@emotion/styled";
import { Button, Card } from "@mui/material";
import { backUrl } from "api/backUrl.";
import axios from "axios";
import useInput from "hooks/useInput";
import React, { useCallback, useEffect, useState } from "react";

const CardLayout = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  const onSubmitForm = useCallback(async () => {
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
        .then((res) => {})
        .catch((err) => {});
    } catch (error) {
      console.error(error);
    }
  }, []);

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
            <input
              data-testid="email-input"
              id="email-input"
              type="email"
              placeholder="email"
              value={email}
              onChange={onChangeEmail}
              required
            />
            <label htmlFor="password-input">패스워드</label>
            <input
              data-testid="password-input"
              id="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={onChangePassword}
              required
            />
            <Button
              data-testid="signin-button"
              variant="contained"
              type="submit"
              disabled={disable}
            >
              로그인
            </Button>
          </LoginForm>
        </CardLayout>
      </div>
    </React.Fragment>
  );
}
