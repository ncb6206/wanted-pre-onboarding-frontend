import Layout from "components/common/Layout";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import SignUpPage from "pages/signup";
import SignInPage from "pages/signin";
import TodoPage from "pages/todo";
import HomePage from "pages/home";
import ErrorPage from "pages/errorPage";

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
