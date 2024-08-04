/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center">
      <div className="w-screen h-screen bg-center relative bg-[url('/img/header.png')] bg-no-repeat bg-contain">
        <div className="border-2 z-10 border-l-slate-900 w-full rounded-lg flex absolute justify-end items-center h-1/15 bg-white">
          <Image
            src="/img/iconBK.png"
            alt="logo BK"
            width={150}
            height={150}
            className="absolute left-28 z-10 -top-1"
          />
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Home
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              About Us
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Services
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Therapist Profile
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Testimonials
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Blog
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Contact
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit size-10 font-medium">
              Login
            </span>
          </Link>
        </div>
        <div className="w-full h-full bg-gradient-to-t from-black to-slate-100 mix-blend-multiply absolute bottom-0"></div>

        <div className=" absolute left-20 top-80 ">
          <h1 className="text-white text-5xl font-bold w-fit ">
            Reclaim Your Happines and Balance: "BK-
            <br />
            Moco.com" 's Online Counseling <br /> for Posistive Learning{" "}
          </h1>
          <p className="text-white mt-5">
            You're not alone on this journey. Our compassionate counselors are
            here to guide you.
          </p>
          <button className="rounded-md w-fit p-3 mt-16 text-center bg-moklet text-white">
            Start Your Healing Journey Today
          </button>
          <button className="rounded-md w-fit p-3 ml-7 mt-16 text-center border-2 text-white">
            Schedule Your Counseling Session
          </button>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-center relative mb-36">
        <div className="shadow-2xl p-10 border-2 w-2/3 m-auto mt-24 rounded-lg flex justify-between items-center ">
          <div>
            <h1 className="font-bold text-lg">Diskusikan Masalah Pada BK</h1>
            <p className="font-medium ">
              Tim BK SMK Telkom Malang siap berdiskusi terkait masalah akademik,
              atau pribadi semua siswa
            </p>
          </div>
          <button className="rounded-md w-fit flex justify-center p-3 text-center bg-moklet text-white">
            <p>Diskusikan </p>{" "}
            <span className="text-2xl ml-2">
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className="shadow-2xl p-10 border-2 w-2/3 m-auto mt-24 rounded-lg flex justify-between items-center ">
          <div className="shadow-2xl p-10 border-2 w-fit h-1/3 rounded-lg flex justify-center">
            <h1 className="text-xl font-semibold font-sans mr-10 items-center">
              DILAPORKAN
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold font-sans">120</h1>
              <p className="text-sm">Kasus</p>
            </div>
          </div>
          <div className="shadow-2xl p-10 border-2 w-fit h-1/3 rounded-lg flex justify-center">
            <h1 className="text-xl font-semibold font-sans mr-10 items-center">
              DIPROSES
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold font-sans">120 </h1>
              <p className="text-sm">Kasus</p>
            </div>
          </div>
          <div className="shadow-2xl p-10 border-2 w-fit h-1/3 rounded-lg flex justify-center">
            <h1 className="text-xl font-semibold font-sans mr-10 items-center">
              SELESAI
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold font-sans">120</h1>
              <p className="text-sm">Kasus</p>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full h-96 flex flex-col justify-center relative bg-secondary opacity-20"></div>
    </div>
  );
}
