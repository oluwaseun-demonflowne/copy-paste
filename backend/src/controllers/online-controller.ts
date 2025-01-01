import { Online } from "@/types";
import { Socket, Server as SocketIOServer } from "socket.io";

export let online_Users: Online[] = [];
export const new_online = (_io: SocketIOServer, socket: Socket) => {
  console.log(`user with id ${socket.id} just joined`);
  socket.on("new-online", (newEmail: string) => {
    online_Users.push({
      email: newEmail,
      socketId: socket.id,
      socket: socket
    });
    // }
  });
};
