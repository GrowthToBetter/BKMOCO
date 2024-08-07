import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

export default function Service(){
    return (<div className="w-full h-96 flex justify-center mb-56 flex-wrap p-5">
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
      </div>);
}