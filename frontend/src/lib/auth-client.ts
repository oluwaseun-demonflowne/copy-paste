import { createAuthClient } from "better-auth/react";
export const { useSession } = createAuthClient({
  fetchOptions: { credentials: "include" },
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://copy-paste-8sxg.onrender.com"
      : "http://localhost:5001"
});
