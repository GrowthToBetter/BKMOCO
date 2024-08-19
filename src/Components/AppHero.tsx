import React from "react";
import Home from "./Home";
import Section from "./Section";
import About from "./About";
import Service from "./Service";
import Profile from "./Profile";
import Testimoni from "./Testimoni";
import News from "./News";
import Credit from "./Credit";
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
