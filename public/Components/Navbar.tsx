import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";




export default function Navbar(){
    return (
        <div className="border-2 z-10 border-l-slate-900 w-full rounded-lg flex fixed justify-end items-center h-1/15 bg-white">
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
);
}