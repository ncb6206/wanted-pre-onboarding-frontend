import styled from "@emotion/styled";
import { Button, Card, Checkbox, Input, Modal } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { backUrl } from "api/backUrl";
import axios from "axios";
import TodoListPage from "components/TodoList";
import useInput from "hooks/useInput";
import React, { useCallback, useEffect, useState } from "react";
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

const TodoInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

interface ITodoList {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export default function TodoPage() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const [todo, onChangeTodo] = useInput<string>("");
  const [todoList, setTodoList] = useState<Array<ITodoList>>([]);

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    async function getTodos() {
      const data = await axios
        .get(`${backUrl}/todos`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            return res.data;
          }
        })
        .catch((err) => {
          console.error(err);
          Modal.error({ content: err.response.data.message });
        });
      setTodoList(data);
    }
    getTodos();
  }, [todoList]);

  const onSubmitTodo = useCallback(async () => {
    await axios
      .post(
        `${backUrl}/todos`,
        {
          todo,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          Modal.success({ content: "투두리스트가 작성되었습니다." });
        }
      })
      .catch((err) => {
        console.error(err);
        Modal.error({ content: err.response.data.message });
      });
  }, [todo]);

  return (
    <React.Fragment>
      <div>
        <CardLayout>
          <TodoInput>
            <Input data-testid="new-todo-input" type="text" value={todo} onChange={onChangeTodo} />
            <Button data-testid="new-todo-add-button" onSubmit={onSubmitTodo}>
              추가
            </Button>
          </TodoInput>
          <TodoList>
            {todoList && (
              <ul>
                {todoList.map((list) => (
                  <TodoListPage
                    id={list.id}
                    todo={list.todo}
                    isCompleted={list.isCompleted}
                    userId={list.userId}
                    accessToken={String(accessToken)}
                  />
                ))}
              </ul>
            )}
          </TodoList>
        </CardLayout>
      </div>
    </React.Fragment>
  );
}
