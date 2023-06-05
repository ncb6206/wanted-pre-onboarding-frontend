import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, Modal } from "antd";
import axios from "axios";
import { backUrl } from "api/backUrl";
import useInput from "hooks/useInput";
import styled from "@emotion/styled";

interface ITodoList {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  accessToken: string;
  getTodos: () => Promise<void>;
}

const TodoListDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

export default function TodoListPage(props: ITodoList) {
  const [todo, onChangeTodo, setTodo] = useInput(props.todo);
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isCompleted, setIsComplete] = useState(props.isCompleted);

  const onChangeCompleted = useCallback(() => {
    setIsComplete((prev) => !prev);
  }, []);

  const onChangeFormOpened = useCallback(() => {
    setIsFormOpened((prev) => !prev);
  }, []);

  const onCancelForm = useCallback(() => {
    setIsFormOpened((prev) => !prev);
    setTodo(props.todo);
  }, []);

  const updateTodo = useCallback(
    (listId: number) => async () => {
      await axios
        .put(
          `${backUrl}/todos/${listId}`,
          {
            todo,
            isCompleted,
          },
          {
            headers: {
              Authorization: `Bearer ${props.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            Modal.success({ content: "업데이트 되었습니다." });
            props.getTodos();
            onChangeFormOpened();
          }
        })
        .catch((err) => {
          console.error(err);
          Modal.error({ content: err.response.data.message });
        });
    },
    [todo, isCompleted]
  );

  const deleteTodo = useCallback(
    (listId: number) => async () => {
      await axios
        .delete(`${backUrl}/todos/${listId}`, {
          headers: { Authorization: `Bearer ${props.accessToken}` },
        })
        .then((res) => {
          if (res.status === 204) {
            Modal.success({ content: "삭제되었습니다." });
            props.getTodos();
          }
        })
        .catch((err) => {
          console.error(err);
          Modal.error({ content: err.response.data.message });
        });
    },
    []
  );

  return (
    <li style={{ margin: "10px 0" }}>
      {isFormOpened && (
        <TodoListDiv>
          <label>
            <input type="checkbox" onChange={onChangeCompleted} checked={isCompleted} />
          </label>
          <Input data-testid="modify-input" value={todo} onChange={onChangeTodo} />
          <Button data-testid="submit-button" onClick={updateTodo(props.id)}>
            제출
          </Button>
          <Button data-testid="cancel-button" onClick={onCancelForm}>
            취소
          </Button>
        </TodoListDiv>
      )}
      {!isFormOpened && (
        <TodoListDiv>
          <label>
            <input type="checkbox" onChange={onChangeCompleted} checked={isCompleted} />
            <span>{props.todo}</span>
          </label>
          <Button data-testid="modify-button" onClick={onChangeFormOpened}>
            수정
          </Button>
          <Button data-testid="delete-button" onClick={deleteTodo(props.id)}>
            삭제
          </Button>
        </TodoListDiv>
      )}
    </li>
  );
}
