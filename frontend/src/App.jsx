import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import NewArrivals from './Pages/NewArrivals'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import Sale from './Pages/Sale'
import Brands from './Pages/Brands'
import Adidas from './Components/Adidas'
import Converse from './Components/Converse'
import Newbalance from './Components/Newbalance'
import Nike from './Components/Nike'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="newArrivals" element={<NewArrivals />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
        <Route path="kids" element={<Kids />} />
        <Route path="brands" element={<Brands/>}/>
        <Route path="brands/adidas" element={<Adidas/>}/>
        <Route path="brands/converse" element={<Converse/>}/>
        <Route path="brands/newbalance" element={<Newbalance/>}/>
        <Route path="brands/nike" element={<Nike/>}/>
        <Route path="sale" element={<Sale />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
