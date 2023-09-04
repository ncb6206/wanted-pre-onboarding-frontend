import { IUser } from "models/api";
import instance from "./config";
import { Modal } from "antd";

export const signInUser = async (data: IUser) => {
  try {
    const response = await instance.post("auth/signin", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = response.data.access_token;
    localStorage.setItem("access_token", token);
    return response;
  } catch (error: any) {
    return Modal.error({ content: error.response.data.message });
  }
};

export const signUpUser = async (data: IUser) => {
  try {
    const response = await instance.post("auth/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
