// src/app/api/siswa/route.ts
import prisma from "@/Lib/prisma";
import { NextAuthOptions } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "1234",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
        const results = await prisma.akun_user.findMany();
        const admins = await prisma.admin.findMany();
        const adminEmails=admins.map((admin)=>{return admin.Gmail});
        for(const {Gmail, Password} of results){
          const user: any = {
            id: 1,
            name: Gmail.split("@")[0],
            email: Gmail,
            role: adminEmails.includes(Gmail) ? "admin":"user",
          };
            if(email === Gmail && password===Password){
              console.log(`user 1 ${user}`)
              return user;
            } 
          }
          return null;
        } catch (err) {
          console.error("Error fetching data:", err);
          return NextResponse.json(
            { error: "Error fetching data" },
            { status: 500 }
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.email = user.email;
        token.fullname = user.fullname;
        (user.role===undefined)? null:token.role=user.role
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/Login",
  },
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
