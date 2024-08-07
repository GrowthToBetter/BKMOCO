/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import React from "react";

export default function Home() {
  return (
    <div className="w-screen lg:h-screen sm:h-half bg-center relative bg-[url('/img/header.png')] bg-no-repeat lg:bg-contain sm:bg-cover">
      <div className="border-2 z-10 border-l-slate-900 w-full rounded-lg flex absolute justify-end items-center h-1/15 bg-white">
        <Image
          src="/img/iconBK.jpg"
          alt="logo BK"
          width={150}
          height={150}
          className="absolute lg:w-40 lg:h-40 sm:w-1/6 sm:h-full md:w-20 md:h-20 lg:left-28 sm:left-14 z-10 -top-1"
        />
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Home
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-10 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            About Us
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Services
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Therapist Profile
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Testimonials
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Blog
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 m-2 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Contact
          </span>
        </Link>
        <Link href="/" className="decoration-black">
          <span className="text-slate-950 inline-block 2xl:m-9 xl:m-8 md:m-2 md:font-semibold md:text-xs lg:m-4 h-fit lx:text-md w-fit 2xl:text-lg lg:font-medium">
            Login
          </span>
        </Link>
      </div>
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
