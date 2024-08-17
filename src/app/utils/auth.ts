import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        try {
          const response = await axios.post(
            `${process.env.BACKEND_URL}/auth/login/${account.provider}`,
            { token: account.access_token },
            {
              headers: {
                Authorization: `Bearer ${account.access_token}`,
                "Content-Type": "application/json",
              },
            }
          );
          token.tokens = response.data;
        } catch (error) {
          console.error("Error during backend authentication:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.tokens = token.tokens as {
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
