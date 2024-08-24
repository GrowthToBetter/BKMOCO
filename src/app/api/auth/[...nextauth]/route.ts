// src/app/api/siswa/route.ts
import prisma from "@/Lib/prisma";
import  {NextAuthOptions}  from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
const authOption: NextAuthOptions={
  session:{
    strategy:"jwt",
  },
  secret:"1234",
  providers:[
    CredentialsProvider({
      type:'credentials',
      name:'credentials',
      credentials:{
        email:{label:"email", type: "email"},
        password:{label:"password", type: "password"},
      },
      async authorize(credentials){
          const{email,password}= credentials as{
            email:string;
            password:string;
          };
          const user:any={
            id:1,
            name:"bara",
            email:"baratraghajaga@gmail.com",
            role:"admin",
          };
          if(email==='baratrahjaga@gmail.com' && password==='1234'){
            return user;
          } else{
            return null;
          }
        }
    })
  ],
  callbacks:{
    async jwt({token,account,profile,user}:any){
      if(account?.providers==="credentials"){
        token.email=user.Gmail;
        token.fullname=user.fullname;
        token.role=user.role
      }
      return token;
    },
    async session({session,token}:any){
      if("email" in token){
        session.user.email=token.email;
      }
      if("fullname" in token){
        session.user.fullname=token.fullname;
      }
      if("role" in token){
        session.user.role=token.role;
      }
      return session;
    }
  },
  pages:{
    signIn:"/Login",
  }
};
const handler = NextAuth(authOption);
export {
  handler as GET, handler as POST
}

