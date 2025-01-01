import { Socket, Server as SocketIOServer } from "socket.io";
import { online_Users } from "./online-controller";

export const message = (_io: SocketIOServer, socket: Socket) => {
  socket.on("new_text", (newtext: string, email: string) => {
    online_Users.map((i) => {
      if (i.email === email) {
        i?.socket.emit("get_text", newtext);
      }
    });
  });
};
