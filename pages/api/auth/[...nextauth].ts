import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

// TODO figure out
const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as string);

// console.log(serviceAccount);

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  adapter: FirestoreAdapter({
    // projectId: serviceAccount.project_id,
    // storageBucket: serviceAccount.client_email

    credential: cert({
      projectId: serviceAccount.project_id,
      clientEmail: serviceAccount.client_email,
      privateKey: serviceAccount.private_key
    })
  }),
  pages: {
    signIn: "/login"
  },
  events: {
    signIn: (message) => {
      console.log(message);
    }
  }
};

export default NextAuth(authOptions);
