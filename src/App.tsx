import AccessTokenProvider from "contexts/AccessTokenProvider";
import Router from "routes/Router";

export default function App() {
  return (
    <AccessTokenProvider>
      <Router />
    </AccessTokenProvider>
  );
}
