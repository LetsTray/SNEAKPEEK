import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import NewArrivals from './Pages/NewArrivals'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'


const App = () => {
  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path='/' element={<RootLayout/>}>
        <Route index="/" element={<Home/>}/>
        <Route path="newArrivals" element={<NewArrivals />}/>
        <Route path="mens" element={<Mens/>}/>
        <Route path="womens" element={<Womens/>}/>
        <Route path="kids" element={<Kids/>}/>
      </Route>

    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
