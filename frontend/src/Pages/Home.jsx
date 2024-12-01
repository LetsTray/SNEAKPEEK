import React from "react";
import Hero from "../Components/Hero";
import Logo from "../Components/Logo";
import Layout from "../Components/Layout";
import Layout2 from "../Components/Layout2";
import Team from "../Components/Team";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className=" w-full">
      <Hero />
      <Logo />
      <Layout />
      <Layout2 />
      <Team />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
