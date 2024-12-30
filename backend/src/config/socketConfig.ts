import { ServerOptions } from "socket.io";

export const ioOptions: Partial<ServerOptions> = {
  cors: {
    origin: ["http://localhost:5173", "https://copy-paste-frontend.vercel.app"],
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-cookie"]
  }
};
