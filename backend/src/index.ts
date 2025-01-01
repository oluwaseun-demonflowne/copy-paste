import express, {
  type Request,
  type Response,
  type Application
} from "express";
import { Socket } from "socket.io";
import * as http from "http";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import * as dotenv from "dotenv";
const app: Application = express();
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
import { ioOptions } from "./config/socketConfig";
import corsOptions from "./config/corsConfig";
import { new_online } from "./controllers/online-controller";
import { message } from "./controllers/message-controller";

dotenv.config();
const PORT = process.env.PORT || 5001;
app.use(cors(corsOptions));

const server = http.createServer(app);
app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const io: SocketIOServer = new SocketIOServer(server, ioOptions);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

const onConnection = (socket: Socket) => {
  new_online(io, socket), message(io, socket);
};
io.on("connection", onConnection);

server.listen(PORT, () => {
  console.log(`Server up at PORT:${PORT}`);
});
