import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
