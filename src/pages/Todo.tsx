import styled from "@emotion/styled";
import { Button, Card, Input, Modal } from "antd";
import TodoListPage from "components/TodoList";
import useInput from "hooks/useInput";
import React, { useCallback, useEffect, useState } from "react";
import { ITodoLists } from "models/api";
import { getTodo, postTodo } from "service/todo";

export default function TodoPage() {
  const [todo, onChangeTodo, setTodo] = useInput<string>("");
  const [todoList, setTodoList] = useState<ITodoLists[]>([]);

  const getTodos = useCallback(async () => {
    const response: any = await getTodo();

    // console.log(response);
    if (response.status === 200) {
      setTodoList(response.data);
    }
  }, []);

  const onSubmitTodo = useCallback(async () => {
    const response: any = await postTodo({ todo });

    // console.log(response);
    if (response.status === 201) {
      Modal.success({ content: "투두리스트가 작성되었습니다." });
      setTodo("");
      getTodos();
    }
  }, [getTodos, setTodo, todo]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <React.Fragment>
      <CardLayout>
        <P>TodoList</P>
        <TodoInputDiv>
          <TodoInput
            data-testid="new-todo-input"
            type="text"
            value={todo}
            onChange={onChangeTodo}
          />
          <Button data-testid="new-todo-add-button" onClick={onSubmitTodo}>
            추가
          </Button>
        </TodoInputDiv>
        <TodoList>
          {todoList && (
            <Ul>
              {todoList.map((list) => (
                <TodoListPage
                  key={list.id}
                  id={list.id}
                  todo={list.todo}
                  isCompleted={list.isCompleted}
                  userId={list.userId}
                  getTodos={getTodos}
                />
              ))}
            </Ul>
          )}
        </TodoList>
      </CardLayout>
    </React.Fragment>
  );
}

const CardLayout = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  font-family: "Noto Sans KR", sans-serif;
`;

const TodoInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
`;

const TodoInput = styled(Input)`
  width: 26rem;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  text-align: center;
  font-size: 50px;
`;
