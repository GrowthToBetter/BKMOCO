"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
  const {push}=useRouter();
  const handleLogin=async (e:any)=>{
    e.preventDefault();
    try{
      const res=await signIn("credentials",{
        redirect:false,
        email:e.target.Gmail.value,
        password:e.target.Password.value,
        callbackUrl:"/",
      })
      if(!res?.error){
        push("/")
      } else{
        console.log(res.error)
      }
    } catch(err){
      console.log(err)
    }
    
  }
  return (
    <div className="container w-screen h-screen flex justify-center items-center">
      <div className="border-moklet border-2 w-80 h-fit rounded-lg flex justify-center flex-col relative items-center">
        <form className="flex justify-center flex-col items-center p-10" onSubmit={(e)=>{handleLogin(e)}}>
          <h1 className="text-xl font-medium absolute top-0 text-white bg-highlight w-full p-5 text-center">
            LOGIN FORM
          </h1>
          <h1 className="text-xl font-bold text-white bg-moklet p-2 rounded-2xl w-fit m-2 mt-10">
            Gmail
            <input
              type="text"
              name="Gmail"
              placeholder="123@gmail.com"
              className="text-black border-2 w-full font-medium text-sm rounded-lg p-3 border-moklet placeholder-slate-400"
            />
          </h1>
          <h1 className="text-xl font-bold text-white bg-moklet p-2 rounded-2xl w-fit m-2">
            Password
            <input
              type="password"
              name="Password"
              placeholder="password"
              className="text-black text-sm font-medium border-2 w-full rounded-lg p-3 border-moklet placeholder-slate-400"
            />
          </h1>
        <button type="submit" className="m-5 w-1/2 p-2 text-white items-center justify-center h-10 flex rounded-lg bg-moklet">
          Submit
        </button>
        </form>
        <Link href="/">
          <h1 className=" m-4 text-blue-600 hover:text-blue-300 hover:border-blue-300 hover:border-b-2">
            Sign Up now?
          </h1>
        </Link>
      </div>
    </div>
  );
}
