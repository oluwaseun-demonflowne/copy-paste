"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
// import { CorsOptions } from "cors";
// import { Server} from "socket.io";
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const dotenv = __importStar(require("dotenv"));
const app = (0, express_1.default)();
const node_1 = require("better-auth/node");
const auth_1 = require("./utils/auth");
dotenv.config();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
const PORT = process.env.PORT || 5001;
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://copy-paste-frontend.vercel.app"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));
const server = http.createServer(app);
app.all("/api/auth/*", (0, node_1.toNodeHandler)(auth_1.auth));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const ioOptions = {
    cors: {
        origin: ["http://localhost:5173", "https://copy-paste-frontend.vercel.app"],
        credentials: true,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
};
const io = new socket_io_1.Server(server, ioOptions);
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
io.on("connection", (_socket) => { });
server.listen(PORT, () => {
    console.log(`Server up at PORT:${PORT}`);
});
