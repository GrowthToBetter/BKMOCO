/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
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
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              Home
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              About Us
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              Services
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              Therapist Profile
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              Testimonials
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              Blog
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
              Contact
            </span>
          </Link>
          <Link href="/" className="decoration-black">
            <span className="text-slate-950 inline-block m-12 h-fit w-fit text-lg font-medium">
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
      <div className="w-full h-fit flex justify-center relative bg-secondary">
        <Image
          src="/img/photo2.png"
          alt="Foto Tentang kami"
          width={800}
          height={600}
          className="m-3 flex justify-center items-center"
        />
        <div className="m-10">
          <p className="text-highlight">TENTANG KAMI</p>
          <h1 className="mt-3 font-semibold mb-2 text-xl">
            BK: Sahabat Siswa dan <br />
            Sahabat di Setiap Langkah
          </h1>
          <p className="text-md">
            Program BK untuk memberikan dampak kepada permasalah yang terjadi{" "}
            <br />
            di dalam dan sekolah
          </p>
          <div className="flex p-1 justify-start items-center">
            <p className="mr-1">
              <FiCheckCircle />{" "}
            </p>
            <p className="text-md">Layanan Siswa dan Orang Tua</p>
          </div>
          <div className="flex p-1 justify-start items-center">
            <p className="mr-1">
              <FiCheckCircle />
            </p>
            <p className="text-md">
              {" "}
              Kunjungan ke Rumah dan Undangan ke Sekolah
            </p>
          </div>
        </div>
        <div className="w-1/2 h-38 top-80 left-1/3 bg-moklet absolute flex justify-center rounded-lg">
          <div className="flex flex-col w-1/2  p-4 justify-start">
            <h1 className="font-semibold text-xl m-5 mb-3 text-white">Misi</h1>
            <p className="text-white ml-5 text-sm font-light">
              Memberikan informasi dan edukasi <br />
              kepada siswa tentang pentingnya <br />
              menjaga kesehatan mental
            </p>
          </div>
          <div className="h-full transform scale-y-75 border-r-2 border-white"></div>
          <div className="flex flex-col p-4 w-1/2 justify-start">
            <h1 className="font-semibold text-xl m-5 mb-3 text-white">
              Pendekatan
            </h1>
            <p className="text-white text-sm font-light ml-5">
              Undang ahli kesehatan mental atau <br />
              psikolog untuk menulis artikel. Pastikan <br />
              artikel tersebut mudah dipahami oleh <br />
              siswa dan relevan dengan kehidupan <br />
              sehari-hari mereka
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-96 flex justify-center flex-wrap p-5">
        <div className="w-3/12 rounded-lg h-2/3 bg-moklet m-3 p-4 pl-7">
        <p className="text-white text-md mb-3 font-light">Our Services</p>
        <h1 className="text-white font-bold text-xl mb-10">Get treatment for all your <br />mental healthcare needs.</h1>
        <button className="w-44 flex p-3 justify-between items-center text-white border-2 border-white rounded-lg text-md font-light">See All Service <p className="size-5 items-center flex "><FiArrowRight /></p></button>
        </div>
        <div className="w-3/12 flex items-center justify-center relative rounded-lg h-2/3 bg-[url('/img/4.png')] bg-no-repeat bg-cover m-3">
        <div className="shadow-2xl flex pl-2 justify-start bg-white w-72 h-14 items-center absolute -bottom-3 rounded-lg ">
          <p className="text-md  font-medium text-nowrap">Bullying Counseling</p>
          <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet "><p className="text-lg text-white"><FiArrowRight /></p></div>
        </div>
        </div>
        <div className="w-3/12 flex items-center justify-center relative rounded-lg h-2/3 bg-[url('/img/5.png')] bg-no-repeat bg-cover m-3">
        <div className="shadow-2xl flex pl-2 justify-start bg-white w-72 h-14 items-center absolute -bottom-3 rounded-lg ">
          <p className="text-md  font-medium text-nowrap">Mental Health Counseling</p>
          <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet "><p className="text-lg text-white"><FiArrowRight /></p></div>
        </div>
        </div>
        <div className="w-3/12 flex items-center justify-center relative rounded-lg h-2/3 bg-[url('/img/6.png')] bg-no-repeat bg-cover m-3">
        <div className="shadow-2xl flex pl-2 justify-start bg-white w-72 h-14 items-center absolute -bottom-3 rounded-lg ">
          <p className="text-md  font-medium text-nowrap">Relationship Counseling</p>
          <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet "><p className="text-lg text-white"><FiArrowRight /></p></div>
        </div>
        </div>
        <div className="w-3/12 flex items-center justify-center relative rounded-lg h-2/3 bg-[url('/img/7.png')] bg-no-repeat bg-cover m-3">
        <div className="shadow-2xl flex pl-2 justify-start bg-white w-72 h-14 items-center absolute -bottom-3 rounded-lg ">
          <p className="text-md  font-medium text-nowrap">Problem Counseling</p>
          <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet "><p className="text-lg text-white"><FiArrowRight /></p></div>
        </div>
        </div>
        <div className="w-3/12 flex items-center justify-center relative rounded-lg h-2/3 bg-[url('/img/8.png')] bg-no-repeat bg-cover m-3">
        <div className="shadow-2xl flex pl-2 justify-start bg-white w-72 h-14 items-center absolute -bottom-3 rounded-lg ">
          <p className="text-md  font-medium text-nowrap">Lack Of Motivation Counseling</p>
          <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet "><p className="text-lg text-white"><FiArrowRight /></p></div>
        </div>
        </div>
        
    </div>
    </div>
  );
}
