import { createAuthClient } from "better-auth/react";
export const { useSession } = createAuthClient({
  baseURL: "http://localhost:5001"
});
