"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocketServer = createSocketServer;
const socket_io_1 = require("socket.io");
const http_1 = require("http");
function createSocketServer() {
    const httpServer = (0, http_1.createServer)();
    const io = new socket_io_1.Server(httpServer);
    io.on("connection", (socket) => {
        socket.on("message", () => {
            socket.emit("new-email-online", "ibuemmanuel60@gmail.com");
        });
    });
    return { io, httpServer };
}
