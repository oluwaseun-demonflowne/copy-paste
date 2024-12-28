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
const app: Application = express();

// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
const PORT = process.env.PORT || 5001;
app.use(cors());
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ioOptions: Partial<ServerOptions> = {
  cors: {
    origin: "http://localhost:3000",
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
