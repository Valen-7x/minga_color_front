import React from 'react'
import NavBar from "../componentes/NavBar"
import Footer from "../componentes/Footer"


export default function Main({children}){
  return (
    <div className="h-screen w-full bg-black p-0">
    <NavBar/>
    {children}
    <Footer/>
    </div> 
 )
}