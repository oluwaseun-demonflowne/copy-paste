import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { SocketProvider } from "./providers/Socket.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SocketProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SocketProvider>
  </BrowserRouter>
);
