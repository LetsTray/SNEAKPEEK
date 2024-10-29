import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout
