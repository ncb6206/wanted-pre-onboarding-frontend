import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import RootPage from "./routes/root";
import ErrorPage from "./errorPage";
import SignUpPage from "routes/signup";
import SignInPage from "routes/signin";
import TodoPage from "routes/todo";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import reset from "styles/reset";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "todo",
    element: <TodoPage />,
  },
]);

root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
