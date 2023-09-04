import { Modal } from "antd";
import instance from "./config";
import { ITodo, IUpdateTodo } from "models/api";

export const getTodo = async () => {
  const accessToken = localStorage.getItem("access_token");

  try {
    const response = await instance.get("todos", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response;
  } catch (error: any) {
    return Modal.error({ content: error.response.data.message });
  }
};

export const postTodo = async (todo: ITodo) => {
  const accessToken = localStorage.getItem("access_token");

  try {
    const response = await instance.post("todos", todo, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    return Modal.error({ content: error.response.data.message });
  }
};

export const refreshTodo = async (props: IUpdateTodo) => {
  const accessToken = localStorage.getItem("access_token");

  try {
    const response = await instance.put(
      `todos/${props.listId}`,
      { todo: props.todo, isCompleted: props.isCompleted },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response;
  } catch (error: any) {
    return Modal.error({ content: error.response.data.message });
  }
};

export const delTodo = async (listId: number) => {
  const accessToken = localStorage.getItem("access_token");

  try {
    const response = await instance.delete(`todos/${listId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response;
  } catch (error: any) {
    return Modal.error({ content: error.response.data.message });
  }
};
