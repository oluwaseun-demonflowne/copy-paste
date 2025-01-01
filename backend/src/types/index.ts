import { Socket } from "socket.io";

export type Online = {
    email: string;
    socketId: string;
    socket: Socket,
  };