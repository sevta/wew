import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";
import GitHubProvider from "next-auth/providers/github";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },

  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
});
