import React from "react";
import Hero from "../Components/Common/Hero";
import Logo from "../Components/Common/Logo";
import Layout from "../Components/Common/Layout";
import Layout2 from "../Components/Common/Layout2";
import Team from "../Components/Common/Team";
import Cta from "../Components/Common/Cta";
import Footer from "../Components/Common/Footer";

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
