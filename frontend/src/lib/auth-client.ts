import { createAuthClient } from "better-auth/react";
export const { useSession } = createAuthClient({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5001"
      : "https://copy-paste-8sxg.onrender.com"
});
