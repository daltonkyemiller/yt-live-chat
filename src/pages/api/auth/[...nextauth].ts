import NextAuth, { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';
import * as process from 'process';
import { JWT } from 'next-auth/jwt';
export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope:
            'https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly',
        },
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, account }) => {
      if (account?.access_token) {
        console.log({ account });
        token.access_token = account.access_token;
      }
      return token as JWT & { access_token?: string };
    },
  },
};
export default NextAuth(authOptions);
