// src/config/cors.js or src/middleware/cors.js
const corsOptions = {
  origin: ["http://localhost:5173", "https://copy-paste-frontend.vercel.app"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["set-cookie"]
};

export default corsOptions;
