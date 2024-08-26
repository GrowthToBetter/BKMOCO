"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  
  const [formData, setFormData] = useState({
    Gmail: "",
    Password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if(e.target.Password.value === e.target.Password2.value){
      const requiredFields = [
        "Gmail",
        "Password",
      ];
  
      const missingFields = requiredFields.filter(
        (field) => !formData[field as keyof typeof formData]
      );
  
      if (missingFields.length > 0) {
        setError(
          `Please fill in the following fields: ${missingFields.join(", ")}`
        );
        return; // Mencegah pengiriman form jika ada field yang kosong
      }
  
      setError(null); // Hapus error jika semua field terisi
  
      try {
        const response = await fetch("/api/akun", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
          }),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("register succes")
        const data = await response.json();
        // Reset form data
        setFormData({
          Gmail:"",
          Password:""
          
        });
        e.target.Password.value=" ";
        e.target.Gmail.value=" ";
      } catch (error) {
        console.error("Error:", error);
        alert("Error adding Account.");
      }
    } else{
      alert("confirm password and password must same!!")
    }
    }
  return (
    <>
      <div className="container w-screen h-screen flex justify-center items-center">
        <div className="border-moklet border-2 w-80 h-fit rounded-lg flex justify-center flex-col relative items-center">
          <form
            className="flex justify-center flex-col items-center p-10"
            onSubmit={handleRegister}
          >
            <h1 className="text-xl font-medium absolute top-0 text-white bg-highlight w-full p-5 text-center">
              Register FORM
            </h1>
            <h1 className="text-xl font-bold text-white bg-moklet p-2 rounded-2xl w-fit m-2 mt-10">
              Email
              <input
                type="text"
                name="Gmail"
                onChange={handleChange}
                placeholder="123@gmail.com"
                className="text-black border-2 w-full font-medium text-sm rounded-lg p-3 border-moklet placeholder-slate-400"
              />
            </h1>
            <h1 className="text-xl font-bold text-white bg-moklet p-2 rounded-2xl w-fit m-2">
              Password
              <input
                type="password"
                name="Password"
                onChange={handleChange}
                placeholder="password"
                className="text-black text-sm font-medium border-2 w-full rounded-lg p-3 border-moklet placeholder-slate-400"
              />
            </h1>
            <h1 className="text-xl font-bold text-white bg-moklet p-2 rounded-2xl w-fit m-2">
              Confirm Password
              <input
                type="password"
                name="Password2"
                placeholder="confirm password"
                className="text-black text-sm font-medium border-2 w-full rounded-lg p-3 border-moklet placeholder-slate-400"
              />
            </h1>
            <button
              type="submit"
              className="m-5 w-1/2 p-2 text-white items-center justify-center h-10 flex rounded-lg bg-moklet"
            >
              Submit
            </button>
          </form>
          <Link href="/Login">
            <h1 className=" m-4 text-blue-600 hover:text-blue-300 hover:border-blue-300 hover:border-b-2">
              Login now?
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};


