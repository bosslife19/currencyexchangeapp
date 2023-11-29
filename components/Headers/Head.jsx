
import React from 'react'
import Navbar from './navbar'
import Calculator from '../Calculator/Numeric'

const Head =  async () => {
  
  const calculateToEuro = async ()=>{
    "use server";
    const res = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=13a80022778264bd9ede6a4097a4b8a5`)
    const data = await res.json();
    return data;
   
   
 }
  return (
    <>
    <div>
      <Navbar calculateToEuro={calculateToEuro}/>
      <Calculator/>
    </div>
    </>
  ) 
}

export default Head
