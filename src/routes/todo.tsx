import { useNavigate } from "react-router-dom";

export default function TodoPage() {
  const navigate = useNavigate();

  if (!localStorage.getItem("access_token")) {
    navigate("/signin");
  }

  return (
    <>
      <h1>ToDo 페이지</h1>
    </>
  );
}
