import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function News(){
    return (<div className="flex flex-col h-1.5screen">
        <div className="flex justify-between px-40 mt-20">
          <div className="flex flex-col justify-center">
            <p className="text-lg font-light text-highlight">
              NEWS & PRESS REALEASE
            </p>
            <h1 className="text-xl font-bold">Berita Terkini</h1>
          </div>
          <button className="ml-52 w-fit p-2 text-white items-center h-10 flex rounded-lg bg-moklet">
            See All Blog
            <span className="text-lg flex items-center">
              <FiArrowRight />
            </span>
          </button>
        </div>
        <div className="flex justify-between px-40">
          <div className="w-2/5 h-fit mt-10">
            <Image
              src="/img/kasus1.png"
              alt="kasus 1"
              width={351}
              height={234.46}
              className="rounded-3xl flex justify-center"
            />
            <div className="w-full h-fit flex flex-col">
              <p className="text-md font-medium">exercise</p>
              <h1 className="text-xl font-bold">Layanan Walas</h1>
              <p className="text-md font-light text-highlight">02 Nov, 2023</p>
              <p className="text-sm font-light">
                Guru BK bersama wali kelas membersamai siswa terkait kelanjutan
                masalah yang sudah disampaikan melalui pesan di BK-MOCO
              </p>
            </div>
          </div>
          <div className="w-2/5 h-fit mt-10">
            <Image
              src="/img/kasus2.png"
              alt="kasus 1"
              width={351}
              height={234.46}
              className="rounded-3xl flex justify-center"
            />
            <div className="w-full h-fit flex flex-col">
              <p className="text-md font-medium">exercise</p>
              <h1 className="text-xl font-bold">Layanan Walas</h1>
              <p className="text-md font-light text-highlight">02 Nov, 2023</p>
              <p className="text-sm font-light">
                Guru BK bersama wali kelas membersamai siswa terkait kelanjutan
                masalah yang sudah disampaikan melalui pesan di BK-MOCO
              </p>
            </div>
          </div>
          <div className="w-2/5 h-fit mt-10 border-2 border-secondary p-5 rounded-xl">
            <div className="border-b-2 border-secondary">
              <h1 className="text-xl font-bold">
                Bagaimana kami dapat memberikan solusi terhadap masalah siswa
              </h1>
              <div className="flex justify-start">
                <p className="text-sm font-medium m-3">02 Nov, 2023</p>
                <p className="text-sm font-light m-3">exercise</p>
              </div>
            </div>
            <div className="border-b-2 border-secondary">
              <h1 className="text-xl font-bold">
                Bagaimana kami dapat memberikan solusi terhadap masalah siswa
              </h1>
              <div className="flex justify-start">
                <p className="text-sm font-medium m-3">02 Nov, 2023</p>
                <p className="text-sm font-light m-3">exercise</p>
              </div>
            </div>
            <div className="border-b-2 border-secondary">
              <h1 className="text-xl font-bold">
                Bagaimana kami dapat memberikan solusi terhadap masalah siswa
              </h1>
              <div className="flex justify-start">
                <p className="text-sm font-medium m-3">02 Nov, 2023</p>
                <p className="text-sm font-light m-3">exercise</p>
              </div>
            </div>
            <div className="flex mt-3 justify-start">
              <button className=" text-highlight text-md font-medium items-center flex rounded-lg">
                READ ALL BLOGS
                <span className="text-lg flex items-center">
                  <FiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>);
}