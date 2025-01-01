import { Socket, Server as SocketIOServer } from "socket.io";
import { online_Users } from "./online-controller";

export const message = (_io: SocketIOServer, socket: Socket) => {
  socket.on("new_text", (newtext: string, email: string) => {
    const getSenderEmail = online_Users.find((i) => i.email === email);
    getSenderEmail?.socket.emit("get_text", newtext);
  });
};
