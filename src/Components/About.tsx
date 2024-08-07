import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function About(){
    return (<div className="w-full h-fit flex justify-center lg:mb-5 lg:pb-24 relative bg-secondary">
        <Image
          src="/img/photo2.png"
          alt="Foto Tentang kami"
          width={800}
          height={600}
          className=" lg:w-1/2 lg:h-2/3 sm:w-2/5 sm:h-1/5  2xl:m-3 flex justify-center items-center"
        />
        <div className="m-10">
          <p className="text-highlight">TENTANG KAMI</p>
          <h1 className="mt-3 font-semibold mb-2 2xl:text-xl sm:text-xs lg:text-md">
            BK: Sahabat Siswa dan <br />
            Sahabat di Setiap Langkah
          </h1>
          <p className="2xl:text-md lg:text-sm">
            Program BK untuk memberikan dampak kepada permasalah yang terjadi{" "}
            <br />
            di dalam dan sekolah
          </p>
          <div className="flex p-1 justify-start items-center">
            <p className="mr-1">
              <FiCheckCircle />{" "}
            </p>
            <p className="2xl:text-md lg:text-sm">
              Layanan Siswa dan Orang Tua
            </p>
          </div>
          <div className="flex p-1 justify-start items-center sm:pb-36">
            <p className="mr-1">
              <FiCheckCircle />
            </p>
            <p className="text-md lg:text-sm">
              Kunjungan ke Rumah dan Undangan ke Sekolah
            </p>
          </div>
        </div>
        <div className="2xl:w-1/2 2xl:h-38 2xl:top-80 bg-moklet lg:h-52 md:w-4/6 sm:bottom-0 md:h-fit lg:top-64 absolute flex justify-center rounded-lg">
          <div className="flex flex-col lg:w-1/2 md:w-fit md:h-fit lg:p-4 sm:p-1 justify-start">
            <h1 className="font-semibold lg:text-xl sm:text-sm m-5 mb-3 text-white">
              Misi
            </h1>
            <p className="text-white 2xl:ml-5 lg:ml-3 leading-none lg:text-lg md:text-xs  font-light">
              Memberikan informasi dan edukasi <br />
              kepada siswa tentang pentingnya <br />
              menjaga kesehatan mental
            </p>
          </div>
          <div className=" lg:h-full md:h-32 transform scale-y-75 border-r-2 border-white"></div>
          <div className="flex flex-col lg:p-4 sm:p-1 md:h-fit w-1/2 md:w-fit justify-start">
            <h1 className="font-semibold lg:text-xl md:text-sm m-5 mb-3 text-white">
              Pendekatan
            </h1>
            <p className="text-white lg:text-lg md:text-xs leading-none m-0 font-light ml-5">
              Undang ahli kesehatan mental atau <br />
              psikolog untuk menulis artikel. Pastikan <br />
              artikel tersebut mudah dipahami oleh <br />
              siswa dan relevan dengan kehidupan <br />
              sehari-hari mereka
            </p>
          </div>
        </div>
      </div>);
}