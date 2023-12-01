
import React from 'react'
import Head from './Headers/Head'
import CurrencyTotal from './Currency/CurrencyTotal'

const Totals = () => {
  
  return (
    <>
     <div className="flex">
      <div className="flex gap-[10px] justify-between">
       <div className="w-[589px] h-[855px]"><Head/></div>
       <div className="w-[612px] h-[855px]"><CurrencyTotal/></div>
      </div>
     </div> 
    </>
  )
}

export default Totals
