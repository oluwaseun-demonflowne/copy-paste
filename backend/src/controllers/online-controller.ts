import { Online } from "@/types";
import { Socket, Server as SocketIOServer } from "socket.io";

export let online_Users: Online[] = [];
export const new_online = (io: SocketIOServer, socket: Socket) => {
  console.log(`user with id ${socket.id} just joined`);
  socket.on("new-online", (newEmail: string) => {
    console.log(newEmail);
    if (!online_Users.some((user) => user.email === newEmail)) {
      online_Users.push({
        email: newEmail,
        socketId: socket.id
      });
      io.emit(
        "get-users",
        online_Users.map((i) => ({ email: i.email, socketId: i.socketId }))
      );
    }
  });
};
