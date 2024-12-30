"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioOptions = void 0;
exports.ioOptions = {
    cors: {
        origin: ["http://localhost:5173", "https://copy-paste-frontend.vercel.app"],
        credentials: true,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["set-cookie"]
    }
};
