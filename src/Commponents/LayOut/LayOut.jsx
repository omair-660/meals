import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollTop from '../ScrollTop'

export default function LayOut() {
  return (
    <div>
        <NavBar/>
        <div className="pt-24 px-9">
        <Outlet/>
        <ScrollTop />
        </div>

        <Footer/>
    </div>
  )
}
