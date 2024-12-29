import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Authenticated from "./providers/Authenticated";
import NotAuthenticated from "./providers/NotAuthenticated";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NotAuthenticated />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Authenticated />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
