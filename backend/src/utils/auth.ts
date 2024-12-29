import { betterAuth } from "better-auth";
import * as dotenv from "dotenv";
dotenv.config();

export const auth = betterAuth({
  //...other options
  emailAndPassword: {
    enabled: true
  },
  trustedOrigins: ["http://localhost:5173"],
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
  }
});
