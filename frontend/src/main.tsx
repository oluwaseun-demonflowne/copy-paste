import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { SocketProvider } from "./providers/Socket.tsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((_registration) => {
      })
      .catch((registrationError) => {
        console.error("ServiceWorker registration failed: ", registrationError);
      });
  });
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SocketProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SocketProvider>
  </BrowserRouter>
);
