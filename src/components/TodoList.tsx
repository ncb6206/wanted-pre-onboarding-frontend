import React, { useCallback, useEffect, useState } from "react";
import { Button, Checkbox, Input, Modal } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import axios from "axios";
import { backUrl } from "api/backUrl";
import useInput from "hooks/useInput";

interface ITodoList {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  accessToken: string;
}

export default function TodoListPage(props: ITodoList) {
  const [todo, onChangeTodo] = useInput(props.todo);
  const [updateFormOpend, setUpdateFormOpend] = useState(false);
  const [isCompleted, setIsComplete] = useState(props.isCompleted);

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
          }
        })
        .catch((err) => {
          console.error(err);
          Modal.error({ content: err.response.data.message });
        });
    },
    []
  );

  const onChangeCheckbox = useCallback((event: CheckboxChangeEvent) => {
    setIsComplete(event.target.checked);
  }, []);

  const onChangeFormOpened = useCallback(() => {
    setUpdateFormOpend((prev) => !prev);
  }, []);

  return (
    <li>
      <Checkbox value={isCompleted} onChange={onChangeCheckbox}></Checkbox>
      {updateFormOpend ? (
        <>
          <Input value={todo} onChange={onChangeTodo} />
          <Button onSubmit={updateTodo(props.id)}>제출</Button>
          <Button onClick={onChangeFormOpened}>취소</Button>
        </>
      ) : (
        <>
          <a>{props.todo}</a>
          <Button onClick={onChangeFormOpened}>수정</Button>
          <Button onClick={deleteTodo(props.id)}>삭제</Button>
        </>
      )}
    </li>
  );
}
