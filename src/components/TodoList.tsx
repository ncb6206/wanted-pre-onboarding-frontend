import React, { useCallback } from "react";
import { Button, Input, Modal } from "antd";
import useInput from "hooks/useInput";
import styled from "@emotion/styled";
import { ITodoList } from "models/api";
import { delTodo, refreshTodo } from "service/todo";
import useOpen from "hooks/useOpen";

export default function TodoListPage(props: ITodoList) {
  const [todo, onChangeTodo, setTodo] = useInput(props.todo);
  const { isOpened: isFormOpened, onChangeOpened: onChangeFormOpened } =
    useOpen(false);
  const { isOpened: isCompleted, onChangeOpened: onChangeCompleted } = useOpen(
    props.isCompleted,
  );

  const onCancelForm = useCallback(() => {
    onChangeFormOpened();
    setTodo(props.todo);
  }, [onChangeFormOpened, props.todo, setTodo]);

  const updateTodo = useCallback(
    (listId: number) => async () => {
      const response: any = await refreshTodo({ listId, todo, isCompleted });

      console.log(response);
      if (response.status === 200) {
        Modal.success({ content: "업데이트 되었습니다." });
        props.getTodos();
        onChangeFormOpened();
      }
    },
    [todo, isCompleted, props, onChangeFormOpened],
  );

  const deleteTodo = useCallback(
    (listId: number) => async () => {
      const response: any = await delTodo(listId);

      if (response.status === 204) {
        Modal.success({ content: "삭제되었습니다." });
        props.getTodos();
      }
    },
    [props],
  );

  return (
    <li style={{ margin: "10px 0" }}>
      {isFormOpened && (
        <TodoListDiv>
          <Label>
            <input
              type="checkbox"
              onChange={onChangeCompleted}
              checked={isCompleted}
            />
            <TodoInput
              data-testid="modify-input"
              value={todo}
              onChange={onChangeTodo}
            />
          </Label>
          <ButtonDiv>
            <Button data-testid="submit-button" onClick={updateTodo(props.id)}>
              제출
            </Button>
            <Button data-testid="cancel-button" onClick={onCancelForm}>
              취소
            </Button>
          </ButtonDiv>
        </TodoListDiv>
      )}

      {!isFormOpened && (
        <TodoListDiv>
          <Label>
            <input
              type="checkbox"
              onChange={onChangeCompleted}
              checked={isCompleted}
            />
            <Span>{props.todo}</Span>
          </Label>
          <ButtonDiv>
            <Button data-testid="modify-button" onClick={onChangeFormOpened}>
              수정
            </Button>
            <Button data-testid="delete-button" onClick={deleteTodo(props.id)}>
              삭제
            </Button>
          </ButtonDiv>
        </TodoListDiv>
      )}
    </li>
  );
}

const TodoListDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
`;

const Span = styled.span`
  width: 20rem;
`;

const TodoInput = styled(Input)`
  width: 20rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;
