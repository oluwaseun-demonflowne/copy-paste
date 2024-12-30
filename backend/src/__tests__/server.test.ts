import { io as Client } from "socket.io-client";
import { createSocketServer } from "../utils/mock_server";
import { afterAll, beforeAll, expect, test } from "@jest/globals";
import validator from "validator";

let server: ReturnType<typeof createSocketServer>;
let clientSocket: ReturnType<typeof Client>;

beforeAll((done) => {
  server = createSocketServer();
  server.httpServer.listen(() => {
    const port = (server.httpServer.address() as any).port;
    clientSocket = Client(`http://localhost:${port}`);
    clientSocket.on("connect", done);
  });
});

afterAll((done) => {
  clientSocket.close();
  server.io.close();
  server.httpServer.close(done);
});

test("New email joined the socket", (done) => {
  clientSocket.emit("message");
  clientSocket.on("new-email-online", (email) => {
    expect(validator.isEmail(email)).toBe(true);
    done();
  });
});
