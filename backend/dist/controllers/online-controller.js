"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_online = exports.online_Users = void 0;
exports.online_Users = [];
const new_online = (io, socket) => {
    console.log(`user with id ${socket.id} just joined`);
    socket.on("new-online", (newEmail) => {
        console.log(newEmail);
        if (!exports.online_Users.some((user) => user.email === newEmail)) {
            exports.online_Users.push({
                email: newEmail,
                socketId: socket.id
            });
            io.emit("get-users", exports.online_Users.map((i) => ({ email: i.email, socketId: i.socketId })));
        }
    });
};
exports.new_online = new_online;
