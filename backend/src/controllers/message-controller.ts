
import { Socket, Server as SocketIOServer } from "socket.io";
import { online_Users } from "./online-controller";

export const message = (io: SocketIOServer, socket: Socket) => {
  socket.on("new_text", (newtext: string,email:string) => {
    console.log(newtext,email);
      io.emit(
        "get-users",
        online_Users.map((i) => ({ email: i.email, socketId: i.socketId }))
      );
  });
};
