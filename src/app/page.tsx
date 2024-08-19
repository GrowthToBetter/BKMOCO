/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Home from "./Components/Home";
import Section from "./Components/Section";
import About from "./Components/About";
import Service from "./Components/Service";
import Profile from "./Components/Profile";
import Testimoni from "./Components/Testimoni";
import News from "./Components/News";
import Credit from "./Components/Credit";
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
