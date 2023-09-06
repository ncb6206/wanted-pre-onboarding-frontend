import Layout from "components/common/Layout";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "pages/Signin";
import TodoPage from "pages/Todo";
import HomePage from "pages/Home";
import ErrorPage from "pages/ErrorPage";
import SignUpPage from "pages/Signup";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
