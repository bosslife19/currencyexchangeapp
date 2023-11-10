import Image from 'next/image'
import React from 'react'
import { FiStar } from 'react-icons/fi'
import CurrencyData from './CurrencyData'
import Data from '@/app/CData'

const Currencies = () => {
  return (
    <>
      <div className="fonts_famly ml-[50px]">
      { Data.currencyItems.map((datas,index)=>(
      <div key={index} className="flex items-center justify-between w-[532px] h-[66px]">
      <div className="flex  gap-[12px] mt-[30px] w-[180px] h-[66px] text p-2">
      <div className='mt-[3px]'>
      <Image
      width={50.6}
      height={10}
      alt="arrows"
      src={datas.cover}
      />  
     </div>
      <div className='text-grayed '>
        <h6 className=' font-normal text-[18px] leading-[22px] tracking-[-1.5%] w-[112px] h-[19px]'>{datas.text}</h6>
        <p className='w-[52px] h-[24px] text-grayed leading-[24px] text-[24px] tracking-[-1.5%] uppercase font-bold font_inter'>{datas.name}</p>
      </div>
     </div>

      <div className="w-[190px] h-[66px] ml-[-16px] p-2 gap-[8px] flex flex-col ">
      <div className=" items-center gap-[8px] mt-[13px] flex justify-between">
      <span className='flex items-center text-center gap-[12px] font-normal text-[16px] font_inter text-grayed leading-[19.36px] tracking-[1%]'>{datas.price} </span>
      <Image
      width={11.6}
       height={10}
       alt="arrows"
       src={datas.restart}  />  
      </div>
        <p className='text-blued flex gap-[3px] items-center font_inter font-normal leading-[19.36px] tracking-[-1%] text-[16px] mr-[5px]'>{datas.cust}</p>      
      </div>

      <div className="flex mt-[20px] w-[96px] h-[66px] relative left-[15px] flex items-center">
      <span className='flex text-white bg-redpink
       p-padd-4  items-center
        w-[70px] h-[25px] rounded-[10px] gap-[4px] '>
        <Image
         width={10.6}
         height={10}
         alt="arrows"
         src={datas.arrow}
         />
       <p className='leading-[15.73px] text-[13px] w-[48px] h-[16px]
       tracking-[-15%] items-center font-normal'>{datas.rating}</p>
      </span>
      </div>

      <div className="flex relative top-[8px] left-[7px]">
      <img src="/assests/stars.jpg" alt=""  />
      </div>

       </div>
      ))}
      
      </div>
    </>
  )
}

export default Currencies
