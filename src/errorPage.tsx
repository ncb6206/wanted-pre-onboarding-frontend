import * as React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <React.Fragment>
      <div id="errorPage">
        <h1>이런!</h1>
        <p>죄송합니다. 예상치 못한 오류가 발생하였습니다.</p>
        <p>{isRouteErrorResponse(error) && (error.statusText || error.data)}</p>
      </div>
    </React.Fragment>
  );
}
