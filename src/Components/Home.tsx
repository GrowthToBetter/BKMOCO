/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import Navbar from "./Navbar";
import React from "react";

export default function Home() {
  return (
    <div className="w-screen lg:h-screen sm:h-half bg-center relative bg-[url('/img/header.png')] bg-no-repeat lg:bg-contain sm:bg-cover">

      <div className="w-full h-full bg-gradient-to-t from-black to-slate-100 mix-blend-multiply absolute bottom-0"></div>

      <div className=" absolute left-20 ml-20 mb-40 lg:bottom-0">
        <h1 className="text-white md:text-2xl 2xl:text-4xl sm:text-xl xl:text-3xl font-bold w-fit ">
          Reclaim Your Happines and Balance: "BK-
          <br />
          Moco.com" 's Online Counseling <br /> for Posistive Learning{" "}
        </h1>
        <p className="text-white mt-5">
          You're not alone on this journey. Our compassionate counselors are
          here to guide you.
        </p>
        <button className="rounded-md w-fit p-3 lg:mt-16 md:mt-9 text-center bg-moklet text-white">
          Start Your Healing Journey Today
        </button>
        <button className="rounded-md w-fit p-3 ml-7 lg:mt-16 md:mt-9 text-center border-2 text-white">
          Schedule Your Counseling Session
        </button>
      </div>
    </div>
  );
}
