"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_online = exports.online_Users = void 0;
exports.online_Users = [];
const new_online = (_io, socket) => {
    console.log(`user with id ${socket.id} just joined`);
    socket.on("new-online", (newEmail) => {
        exports.online_Users.push({
            email: newEmail,
            socketId: socket.id,
            socket: socket
        });
        // }
    });
};
exports.new_online = new_online;
