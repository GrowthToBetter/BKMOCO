'use client';

import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function Section(){
    function nextPage(){
      open("/Pengaduan","_self")
    };
    return (<div className="w-full h-fit flex flex-col justify-center relative mb-36">
        <div className="shadow-2xl p-10 border-2 w-2/3 m-auto mt-24 rounded-lg flex justify-between items-center ">
          <div className="w-fit h-fit">
            <h1 className="font-bold text-lg">Diskusikan Masalah Pada BK</h1>
            <p className="font-medium ">
              Tim BK SMK Telkom Malang siap berdiskusi terkait masalah akademik,
              atau pribadi semua siswa
            </p>
          </div>
          <button className="rounded-md w-fit flex justify-center p-3 text-center bg-moklet text-white" onClick={()=>{nextPage()}}>
            <p>Diskusikan </p>
            <span className="text-2xl ml-2">
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className="shadow-2xl p-10 border-2 w-2/3 m-auto mt-24 rounded-lg flex justify-between items-center ">
          <div className="shadow-2xl p-10 border-2 w-1/3 h-1/3 rounded-lg flex justify-center">
            <h1 className="lg:text-xl sm:text-sm sm:font-medium lg:font-semibold font-sans 2xl:mr-10 lg:mr-6 flex md:mr-3 items-center">
              DILAPORKAN
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold font-sans">120</h1>
              <p className="text-sm">Kasus</p>
            </div>
          </div>
          <div className="shadow-2xl p-10 border-2 w-1/3 m-2 h-1/3 rounded-lg flex justify-center">
            <h1 className="lg:text-xl sm:text-sm sm:font-medium lg:font-semibold font-sans 2xl:mr-10 lg:mr-6 flex md:mr-3 items-center">
              DIPROSES
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold font-sans">120 </h1>
              <p className="text-sm">Kasus</p>
            </div>
          </div>
          <div className="shadow-2xl p-10 border-2 w-1/3 m-2 h-1/3 rounded-lg flex justify-center">
            <h1 className="lg:text-xl sm:text-sm sm:font-medium lg:font-semibold font-sans 2xl:mr-10 lg:mr-6 flex md:mr-3 items-center">
              SELESAI
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold font-sans">120</h1>
              <p className="text-sm">Kasus</p>
            </div>
          </div>
        </div>
      </div>);
}