import NextAuth, { AuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOption: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async session({ token, session }) {
      return session;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
