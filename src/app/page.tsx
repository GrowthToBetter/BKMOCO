/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Home from "../../public/Components/Home";
import Section from "../../public/Components/Section";
import About from "../../public/Components/About";
import Service from "../../public/Components/Service";
import Profile from "../../public/Components/Profile";
import Testimoni from "../../public/Components/Testimoni";
import News from "../../public/Components/News";
import Credit from "../../public/Components/Credit";
export default function App() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden ">
      <Home />
      <Section />
      <About />
      <Service />
      <Profile />
      <Testimoni />
      <News />
      <Credit />
    </div>
  );
}
