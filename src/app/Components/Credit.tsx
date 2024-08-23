import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function Credit() {
  return (
    <div className="flex flex-col px-40 m-20">
      <div className="flex justify-between m-2 p-2 border-b-2 border-secondary">
        <Image
          src="/img/iconBK.jpg"
          alt="icon bk"
          width={118}
          height={118}
          className="rounded-3xl flex justify-center bg-cover"
        />
        <div className=" w-5/6">
          <div className="flex justify-between border-b-2 border-secondary m-2">
            <h1 className="flex items-center text-lg font-bold">
              Believe Us As Consider
            </h1>
            <div className="flex">
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-sm font-light">
                  Home
                </span>
              </Link>
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-sm font-light">
                  Service
                </span>
              </Link>
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-sm font-light">
                  About Us
                </span>
              </Link>
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-sm font-light">
                  Contact
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <button className=" text-white text-sm font-light px-2 p-1 items-center bg-moklet flex rounded-lg">
              Join Now
              <span className="text-lg flex items-center">
                <FiArrowRight />
              </span>
            </button>
            <div className="flex">
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-xs font-thin">
                  Terms of use
                </span>
              </Link>
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-xs font-thin">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/" className="decoration-black">
                <span className="text-slate-950 m-3 inline-block text-xs font-thin">
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-medium">
          Copyright © 2024 Malang, All rights reserved. Design By keefa.
          Programmed By Jean
        </p>
        <div className="flex">
          <button className="bg-[url('/img/instagram-icon.png')] w-9 h-9"></button>
          <button className="bg-[url('/img/facebook-icon.png')] w-9 h-9"></button>
          <button className="bg-[url('/img/linkedin-icon.png')] w-9 h-9"></button>
        </div>
      </div>
    </div>
  );
}
