import { Card, Button, Input, Modal } from "antd";
import styled from "@emotion/styled";
import { backUrl } from "api/backUrl";
import axios from "axios";
import useInput from "hooks/useInput";
import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardLayout = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const SignUpForm = styled.form`
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

export default function SignUpPage() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const [disable, setDisable] = useState(true);
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  useEffect(() => {
    if (accessToken) {
      navigate("/todo");
    }
  }, []);

  const onSubmitForm = useCallback(
    async (event: MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await axios
          .post(
            `${backUrl}/auth/signup`,
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
            if (res.status === 201) {
              Modal.success({ content: "회원가입이 완료되었습니다." });
              return navigate("/signin");
            }
          })
          .catch((err) => {
            console.error(err);
            Modal.error({ content: err.response.data.message });
          });
      } catch (error) {
        console.error(error);
        Modal.error({ content: "에러가 발생하였습니다" });
      }
    },
    [email, password]
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
          <SignUpForm onSubmit={onSubmitForm}>
            <h1>회원가입</h1>
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
            <Button data-testid="signup-button" htmlType="submit" type="primary" disabled={disable}>
              회원가입
            </Button>
          </SignUpForm>
        </CardLayout>
      </div>
    </React.Fragment>
  );
}
