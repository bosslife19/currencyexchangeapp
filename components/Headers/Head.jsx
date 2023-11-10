import React from 'react'
import Navbar from './navbar'
import Calculator from '../Calculator/Numeric'

const Head = () => {
  return (
    <>
    <div className="w-full h-[50rem]">
      <Navbar/>
      <Calculator/>
    </div>
    </>
  ) 
}

export default Head
