import React from 'react'
import Header from "./Components/Header";
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Logo from './Components/Logo';
import Layout from './Components/Layout';
import Layout2 from './Components/Layout2';
import Team from './Components/Team';
import Cta from './Components/Cta';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Layout/>
      <Layout2/>
      <Team/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App

