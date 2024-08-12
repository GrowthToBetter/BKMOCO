import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function Profile(){
    return (<div className="w-screen h-fit flex justify-start flex-col p-5">
        <div className="bg-white w-fit mx-48 h-fit mb-8">
          <p className="text-highlight">Our Team</p>
          <h1 className="text-2xl font-bold mb-2">
            Profil Guru BK SMK Telkom Malang
          </h1>
          <p className="md:text-xs">
            Tidak masalah kalian memiliki masalah di sekolah, asalkan punya
            tempat <br />
            cerita yang terpercaya
          </p>
        </div>
        <div className="flex w-full h-fit justify-center">
          <div className="bg-[url('/img/emil.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative">
            <div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">
                Mr. Emil
              </h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="bg-[url('/img/Nia.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative">
            <div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">
                Ms. Nia
              </h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="bg-[url('/img/endah.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative">
            <div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">
                Ms. Endah
              </h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="bg-[url('/img/Kheren.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative">
            <div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">
                Ms. Kheren
              </h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <button className=" ml-52 w-fit p-2 text-white items-center h-10 flex rounded-lg bg-moklet ">
            Meet All Counsellor{" "}
            <span className="text-lg flex items-center">
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className="flex w-screen mt-5 h-fit justify-center border-t-2 border-secondary">
          <div className="m-2 pl-40 p-10 w-2/3">
            <p className="text-moklet text-md font-medium">
              Focusing on you, with the best therapeutic care.
            </p>
            <h1 className="text-xl font-bold my-3">Kelebihan Kami</h1>
            <p className="text-sm font-light">
              Dengan mengusung slogan Terpercaya, Solutif dan Privasi Terjaga
              demi memberikan solusi terbaik
            </p>
            <div className="flex justify-start">
              <Image
                src="/img/iconSide.png"
                alt="side icon"
                width={64}
                height={295}
              />
              <div>
                <div className="p-4 border-b-2 border-secondary ">
                  <h1 className="text-lg font-semibold">Terpercaya</h1>
                  <p className="text-md font-light mb-2">
                    Rahasia aman dan berjalan normal
                  </p>
                </div>
                <div className="p-4 border-b-2 border-secondary ">
                  <h1 className="text-lg font-semibold">Solutif</h1>
                  <p className="text-md font-light mb-2">
                    Solusi privasi, Kenyamanan Pasti
                  </p>
                </div>
                <div className="p-4 border-b-2 border-secondary ">
                  <h1 className="text-lg font-semibold">Privasi Terjaga</h1>
                  <p className="text-md font-light mb-2">
                    Privasi Terjaga, Kepercayaan Terjaga
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 m-2 h-half mt-5 bg-[url('/img/1.png')] bg-cover bg-no-repeat rounded-bl-2xl"></div>
        </div>
        <button className=" ml-52 w-fit p-2 text-white items-center h-10 flex rounded-lg bg-moklet ">
          Konsultasi
          <span className="text-lg flex items-center">
            <FiArrowRight />
          </span>
        </button>
      </div>);
}