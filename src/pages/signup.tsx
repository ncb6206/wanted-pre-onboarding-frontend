import { Card, Button, Input, Modal } from "antd";
import styled from "@emotion/styled";
import useInput from "hooks/useInput";
import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "service/auth";
import isValid from "components/common/utils/valid";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  const onSubmitForm = useCallback(
    async (event: MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response: any = await signUpUser({ email, password });

      // console.log(response);
      if (response.status === 201) {
        Modal.success({ content: "회원가입이 완료되었습니다." });
        return navigate("/signin");
      }
    },
    [email, password, navigate],
  );

  useEffect(() => {
    const valid = isValid({ email, password });
    setDisable(valid);
  }, [email, password]);

  return (
    <React.Fragment>
      <CardLayout>
        <SignUpForm onSubmit={onSubmitForm}>
          <p>회원가입</p>
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
          <Button
            data-testid="signup-button"
            htmlType="submit"
            type="primary"
            disabled={disable}
          >
            회원가입
          </Button>
        </SignUpForm>
      </CardLayout>
    </React.Fragment>
  );
}

const CardLayout = styled(Card)`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  font-family: "Noto Sans KR", sans-serif;
`;

const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
