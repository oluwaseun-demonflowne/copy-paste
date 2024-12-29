import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:5001"
});

export const { useSession } = createAuthClient();
