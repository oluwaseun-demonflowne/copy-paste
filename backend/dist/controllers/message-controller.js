"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const online_controller_1 = require("./online-controller");
const message = (_io, socket) => {
    socket.on("new_text", (newtext, email, socketDoingTheTyping) => {
        online_controller_1.online_Users.map((i) => {
            if (i.email === email) {
                i === null || i === void 0 ? void 0 : i.socket.emit("get_text", newtext, socketDoingTheTyping);
            }
        });
    });
};
exports.message = message;
