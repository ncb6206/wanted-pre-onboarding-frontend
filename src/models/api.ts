export interface ITodoLists {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface ITodoList extends ITodoLists {
  getTodos: () => Promise<void>;
}

export interface IUser {
  email: string;
  password: string;
}

export interface ITodo {
  todo: string;
}

export interface IUpdateTodo {
  listId: number;
  todo: string;
  isCompleted: boolean;
}

// export interface ISignUp {
//   data: string;
//   status: number;
//   statusText: string;
//   headers: {
//     "content-length": string;
//   };
//   config: {
//     transitional: {
//       silentJSONParsing: boolean;
//       forcedJSONParsing: boolean;
//       clarifyTimeoutError: boolean;
//     };
//     adapter: string[];
//     transformRequest: any[];
//     transformResponse: any[];
//     timeout: number;
//     xsrfCookieName: string;
//     xsrfHeaderName: string;
//     maxContentLength: number;
//     maxBodyLength: number;
//     env: {};
//     headers: {
//       Accept: string;
//       "Content-Type": string;
//     };
//     baseURL: string;
//     method: string;
//     url: string;
//     data: string;
//   };
//   request: {};
// }
