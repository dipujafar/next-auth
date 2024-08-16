import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Your Password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
          currentUser;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOption);

const users = [
  {
    id: 1,
    name: "Jafar",
    email: "jafar@gmail.com",
    password: "password",
    type: "admin",
    image: "hhpt:/sdsf",
  },
  {
    id: 2,
    name: "Dipu",
    email: "dipu@gmail.com",
    password: "password",
    type: "user",
    image: "hhpt:/sdsf",
  },
  {
    id: 1,
    name: "Uddin",
    email: "uddin@gmail.com",
    password: "password",
    type: "admin",
    image: "hhpt:/sdsf",
  },
];

export { handler as GET, handler as POST };
