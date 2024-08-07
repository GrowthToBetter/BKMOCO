/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
export default function Home() {
  return (
    <div className="relative flex flex-col justify-center ">
      <div className="w-screen h-screen bg-center relative bg-[url('/img/header.png')] bg-no-repeat lg:bg-contain sm:bg-cover">
        <div className="border-2 z-10 border-l-slate-900 w-full rounded-lg flex absolute justify-end items-center h-1/15 bg-white">
          <Image
            src="/img/iconBK.jpg"
            alt="logo BK"
            width={150}
            height={150}
            className="absolute sm:w-1/6 sm:full left-28 z-10 -top-1"
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

        <div className=" sticky left-20 ml-20 mb-40 lg:top-80 md:top-40 ">
          <h1 className="text-white text-3xl 2xl:text-5xl sm:text-xl xl:text-4xl font-bold w-fit ">
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
      <div className="w-full h-fit flex flex-col justify-center relative mb-36">
        <div className="shadow-2xl p-10 border-2 w-2/3 m-auto mt-24 rounded-lg flex justify-between items-center ">
          <div className="w-fit h-fit">
            <h1 className="font-bold text-lg">Diskusikan Masalah Pada BK</h1>
            <p className="font-medium ">
              Tim BK SMK Telkom Malang siap berdiskusi terkait masalah akademik,
              atau pribadi semua siswa
            </p>
          </div>
          <button className="rounded-md w-fit flex justify-center p-3 text-center bg-moklet text-white">
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
      </div>
      <div className="w-full h-fit flex justify-center lg:mb-5 lg:pb-24 relative bg-secondary">
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
      </div>

      <div className="w-full h-96 flex justify-center mb-56 flex-wrap p-5">
        <div className="lg:w-3/12 rounded-lg lg:h-2/3 lg:flex lg:flex-col lg:justify-between md:h-1/3 md:w-3/12 bg-moklet m-3 lg:p-4 md:p-2 pl-7">
          <p className="text-white lg:text-md md:text-sm lg:mb-3 md:mb-0.5 font-light">
            Our Services
          </p>
          <h1 className="text-white 2xl:font-bold 2xl:text-xl lg:text-md md:text-xs lg:font-semibold md:mb-1 lg:mb-5 2xl:mb-10">
            Get treatment for all your <br />
            mental healthcare needs.
          </h1>
          <button className="lg:w-44 md:w-36 flex lg:p-3 md:p-1 justify-between items-center text-white border-2 border-white rounded-lg md:text-xs lg:text-md font-light">
            See All Service
            <p className="size-5 items-center flex ">
              <FiArrowRight />
            </p>
          </button>
        </div>
        <div className="lg:w-3/12 flex items-center justify-center relative rounded-lg md:h-1/3 md:w-3/12 lg:h-2/3 bg-[url('/img/4.png')] bg-no-repeat bg-cover m-3">
          <div className="shadow-2xl flex pl-2 justify-start lg:w-56 lg:h-10 bg-white 2xl:w-72 2xl:h-14 items-center absolute -bottom-3 rounded-lg ">
            <p className="2xl:text-md lg:text-sm lg:font-light 2xl:font-medium text-nowrap">
              Bullying Counseling
            </p>
            <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet ">
              <p className="text-lg text-white">
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 flex items-center justify-center relative rounded-lg md:h-1/3 md:w-3/12 lg:h-2/3 bg-[url('/img/5.png')] bg-no-repeat bg-cover m-3">
          <div className="shadow-2xl flex pl-2 justify-start lg:w-56 lg:h-10 bg-white 2xl:w-72 2xl:h-14 items-center absolute -bottom-3 rounded-lg ">
            <p className="2xl:text-md lg:text-sm lg:font-light 2xl:font-medium text-nowrap">
              Mental Health Counseling
            </p>
            <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet ">
              <p className="text-lg text-white">
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 flex items-center justify-center relative rounded-lg md:h-1/3 md:w-3/12 lg:h-2/3 bg-[url('/img/6.png')] bg-no-repeat bg-cover m-3">
          <div className="shadow-2xl flex pl-2 justify-start lg:w-56 lg:h-10 bg-white 2xl:w-72 2xl:h-14 items-center absolute -bottom-3 rounded-lg ">
            <p className="2xl:text-md lg:text-sm lg:font-light 2xl:font-medium text-nowrap">
              Relationship Counseling
            </p>
            <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet ">
              <p className="text-lg text-white">
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 flex items-center justify-center relative rounded-lg md:h-1/3 md:w-3/12 lg:h-2/3 bg-[url('/img/7.png')] bg-no-repeat bg-cover m-3">
          <div className="shadow-2xl flex pl-2 justify-start lg:w-56 lg:h-10 bg-white 2xl:w-72 2xl:h-14 items-center absolute -bottom-3 rounded-lg ">
            <p className="2xl:text-md lg:text-sm lg:font-light 2xl:font-medium text-nowrap">
              Problem Counseling
            </p>
            <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet ">
              <p className="text-lg text-white">
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 flex items-center justify-center relative rounded-lg md:h-1/3 md:w-3/12 lg:h-2/3 bg-[url('/img/8.png')] bg-no-repeat bg-cover m-3">
          <div className="shadow-2xl flex pl-2 justify-start lg:w-60 lg:h-10 bg-white 2xl:w-72 2xl:h-14 items-center absolute -bottom-3 rounded-lg ">
            <p className="2xl:text-md lg:text-sm lg:font-light 2xl:font-medium text-nowrap">
              Lack Of Motivation Counseling
            </p>
            <div className="rounded-full w-7 border-2 border-white -right-2 h-7 absolute flex justify-center items-center bg-moklet ">
              <p className="text-lg text-white">
                <FiArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-96 flex justify-start flex-col p-5">
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
            <div className="bg-[url('/img/emil.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative"><div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">Mr. Emil</h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            </div>
            <div className="bg-[url('/img/Nia.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative"><div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">Ms. Nia</h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            </div>
            <div className="bg-[url('/img/endah.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative"><div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">Ms. Endah</h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            </div>
            <div className="bg-[url('/img/Kheren.png')] w-64 rounded-lg m-10 h-80 bg-cover bg-no-repeat relative"><div className="bg-gradient-to-t from-black mix-blend-multiply to-white w-full h-2/3 bottom-0 absolute"></div>
            <div className="flex justify-start m-3 w-full h-fit absolute flex-col bottom-0">
              <h1 className="text-white font-bold border-b-2 w-56 border-b-secondary text-xl relative bottom-0">Ms. Kheren</h1>
              <p className="text-white font-light  w-fit text-xs relative bottom-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}
