import { customSessionClient, multiSessionClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
export const { useSession } = createAuthClient({
  fetchOptions: { credentials: "include" },
  plugins: [customSessionClient(), multiSessionClient()],
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://copy-paste-8sxg.onrender.com"
      : "http://localhost:5001"
});
