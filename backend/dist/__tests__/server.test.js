"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const mock_server_1 = require("../utils/mock_server");
const globals_1 = require("@jest/globals");
const validator_1 = __importDefault(require("validator"));
let server;
let clientSocket;
(0, globals_1.beforeAll)((done) => {
    server = (0, mock_server_1.createSocketServer)();
    server.httpServer.listen(() => {
        const port = server.httpServer.address().port;
        clientSocket = (0, socket_io_client_1.io)(`http://localhost:${port}`);
        clientSocket.on("connect", done);
    });
});
(0, globals_1.afterAll)((done) => {
    clientSocket.close();
    server.io.close();
    server.httpServer.close(done);
});
(0, globals_1.test)("New email joined the socket", (done) => {
    clientSocket.emit("message");
    clientSocket.on("new-email-online", (email) => {
        (0, globals_1.expect)(validator_1.default.isEmail(email)).toBe(true);
        done();
    });
});
