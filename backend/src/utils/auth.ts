import { betterAuth } from "better-auth";
import * as dotenv from "dotenv";
dotenv.config();

export const auth = betterAuth({
  //...other options
  emailAndPassword: {
    enabled: true
  },
  trustedOrigins: [
    "http://localhost:5173",
    "https://copy-paste-frontend.vercel.app/"
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      flowName: "GeneralOAuthFlow"
    }

    //    github: {
    //     clientId: process.env.GITHUB_CLIENT_ID,
    //     clientSecret: process.env.GITHUB_CLIENT_SECRET,
    //    }
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
  }
});
