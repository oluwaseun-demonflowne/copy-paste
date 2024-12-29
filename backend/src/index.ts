import express, {
  type Request,
  type Response,
  type Application
} from "express";
import { type Socket, type ServerOptions } from "socket.io";
import * as http from "http";
// import { CorsOptions } from "cors";
// import { Server} from "socket.io";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import * as dotenv from "dotenv";
const app: Application = express();

import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
dotenv.config();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
const PORT = process.env.PORT || 5001;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const server = http.createServer(app);
app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const ioOptions: Partial<ServerOptions> = {
  cors: {
    origin: "http://localhost:5173",
    // origin: "https://chatapp.stealthcode.site",
    methods: ["GET", "POST"]
  }
};

const io: SocketIOServer = new SocketIOServer(server, ioOptions);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

io.on("connection", (_socket: Socket) => {});

server.listen(PORT, () => {
  console.log(`Server up at PORT:${PORT}`);
});
