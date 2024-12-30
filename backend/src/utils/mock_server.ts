import { Server } from "socket.io";
import { createServer } from "http";

export function createSocketServer() {
  const httpServer = createServer();
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    socket.on("message", () => {
      socket.emit("new-email-online", "ibuemmanuel60@gmail.com");
    });
  });
  return { io, httpServer };
}
