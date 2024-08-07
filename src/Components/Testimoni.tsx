import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function Testimoni(){
    return (<div className="w-screen h-fit flex justify-center bg-secondary ">
        <div className="w-full h-fit p-10 ml-40">
          <p className="text-md font-light text-moklet">TESTIMONIALS</p>
          <h1 className="text-xl font-bold">Apa yang Mereka Katakan...</h1>
          <p className="text-sm font-light">
            Testimoni dari siswa terkait curhatan <br />
            bersama bk
          </p>
        </div>
        <div className="w-full h-fit flex justify-center mr-40">
          <div className="flex flex-col justify-center m-20">
            <div className="bg-[url('/img/15.png')] bg-no-repeat bg-cover relative w-64 h-52 p-2">
              <p className="text-sm font-light w-full h-2/3 absolute bottom-0">
                Dukungan dari tim BK membuat saya merasa lebih kuat dan mampu
                menghadapi tantangan di sekolah. Terima kasih atas bantuannya!
              </p>
            </div>
            <div className="flex justify-start mt-10">
              <div className="w-14 h-14 rounded-full bg-[url('/img/tes1.png')] bg-top bg-no-repeat bg-cover"></div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Keefa</h1>
                <p className="text-md font-light">Siswa RPL 32</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mr-20">
            <div className="bg-[url('/img/15.png')] bg-no-repeat bg-cover relative w-64 h-52 p-2">
              <p className="text-sm font-light w-full h-2/3 absolute bottom-0">
                Tim BK membantu saya mengatasi masalah akademik dan sosial
                dengan baik. Saya merasa lebih percaya diri dan didukung.
              </p>
            </div>
            <div className="flex justify-start mt-10">
              <div className="w-14 h-14 rounded-full bg-[url('/img/tes2.png')] bg-top bg-no-repeat bg-cover"></div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Haidar</h1>
                <p className="text-md font-light">Siswa TKJ 32</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
}