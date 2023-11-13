"use client"
import React, { useContext, useState } from 'react'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
 import "../../Css/styles.css"
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { AppContext } from '@/context/appContext'
import Image from 'next/image'
const Navbar = ({displayColor}) => {
  
  const [selectedHeader, setSelectedHeader] = useState('Calculation');
  const {value, result} = useContext(AppContext)
  const [content, setContent] = useState('')  

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    // Reset content when changing sections
    setContent('')
  };

 
  
 
  
  return (
    <>
     <main className='mx-[50px] mt-[50px] fonts_famly '>
     <div className="flex">
     <div className="flex items-center gap-[0]">
     <div className="flex gap-[62px] items-center mt-[-20px] ml-[20px] ">
     <button
       onClick={() => handleHeaderClick('Calculation')}
       className={`${
        selectedHeader === 'Calculation' ? 'text-blued font-semibold' : 'text-grayed font-normal'
       } w-[122px] h-[30px] rounded-[100px] p-[4px] items-center text-center text-[20px] font-sans leading-[24px] tracking-[-1.5%]`}>
       Calculation
     </button>
     <button
       onClick={() => handleHeaderClick('Exchange')}
       className={`${
        selectedHeader === 'Exchange' ? 'text-blued font-semibold' : 'text-grayed font-normal'
       } w-[122px] h-[30px] rounded-[100px] p-[4px] items-center text-center text-[20px] leading-[24px] tracking-[-1.5%]`}>
      Exchange
     </button>
     <div className="">
     <button
     onClick={() => handleHeaderClick('clickHere')}
     className={`${
      selectedHeader === 'clickHere' ? 'text-yellowed font-semibold' : 'text-yellowed font-normal'
     } w-[122px] h-[30px] rounded-[100px] p-[4px] items-center text-center text-[20px] leading-[24px] tracking-[-1.5%]`}>
     ClickHere
   </button>
  
    <div className=' w-[50px] h-[40px] bg-yellowed relative border rounded-[4px] border-yellowed ml-[50px]'>
    <p className='text-end text-white'>N</p>
    </div>
    <div className="flex w-[70px] text-yellowed h-[50px] text-[28px] items-center absolute border rounded-[4px] border-yellowed bg-boardyelllow mt-[-30px] ml-[15px]  z-[1000px]">
     <p className='text-[28px] items-center text-yellowed ml-[7px]'>- 1 -</p>
    </div>
     
    </div>
     <div className='relative top-[40px]'>
      <Image width={40} height={10} src="/assests/hamburger.jpg" />
     </div>
    </div>
    </div>
   
    </div>
    <br/>
     <div className="flex gap-[62px] items-center mt-[-30px] mb-[5px]">
       <span className='bg-[#0369A1] text-[#fff] w-[122px] h-[30px] rounded-[100px] p-[4px] items-center text-center'>000</span>
       <span className='text-[#667080] fonts_famly text-[20px] font-normal leading-[27.24px] items-center tracking-[-1.5%]'>KMB</span>
       <span className='text-[#8ea1c0] fonts_famly text-[20px] font-normal leading-[27.24px] items-center text-center flex tracking-[-1.5%]'>万亿兆</span>
       
     </div>

     <div className="bg-[#fffbeb]  rounded-b-2xl shadow-boxxing flex w-[572px] h-[416px]  justify-start gap-[8px]">
      {selectedHeader === 'Calculation' && (
        <div className='flex pl-[20px] pr-[20px] overflow-hidden mt-[90px]'>
          <div className='fonts_famly'>
          <div className="value w-[486px] h-[247px] flex-wrap text-[32px] leading-[43.58px] text-grayed tracking-[-1.5%] items-end font-normal">{value? value : ''}</div>
          <div className="result flex justify-end items-end text-blued font-semibold text-[24px] leading-[32.69px] tracking-[-5%] ">{result? result : ''}</div>
          </div>
        </div>
      )}
      {selectedHeader === 'Exchange' && (
        <div className='mt-[16rem] w-full'>
          <div className='bg-[#fce8c9]'>
          <div className="flex bg-[#fffbeb] justify-between fonts_famly items-center w-[572px] h-[57px] rounded-roundin p-padd-20">
          <div className="flex text-blued">
           <h4 className='font-bold text-[20px] leading-[34.05px] tracking-[-1.5%]'>USD</h4>
           <MdOutlineKeyboardArrowDown className="text-blued font-bold text-[30px] leading-[34.05px] tracking-[-1.5%]"/>
         </div>
         <div className="text-blued flex gap-[10px] ">
           <p className='opacity-60'>1</p>
           <p className=' font-bold'>$</p>
         </div>
        </div>
          </div>
         <div className="bg-[#fddaa1]">
         <div className="flex bg-[#fce8c9] justify-between fonts_famly items-center   h-[57px] p-padd-20 rounded-roundin">
         <div className="flex text-blued">
          <h4 className='font-bold text-[20px] leading-[34.05px] tracking-[-1.5%]'>USD</h4>
          <MdOutlineKeyboardArrowDown className="text-blued font-bold text-[30px] leading-[34.05px] tracking-[-1.5%]"/>
        </div>
        <div className="text-blued flex gap-[10px] ">
          <p className='opacity-60'>1</p>
          <p className=' font-bold'>$</p>
        </div>
       </div>
      </div>

         <div className="bg-[#fffbeb] rounded-roundin">
         <div className="flex bg-[#fddaa1] justify-between fonts_famly items-center  h-[57px] rounded-roundin p-padd-20">
         <div className="flex text-blued">
          <h4 className='font-bold text-[20px] leading-[34.05px] tracking-[-1.5%]'>USD</h4>
          <MdOutlineKeyboardArrowDown className="text-blued font-bold text-[30px] leading-[34.05px] tracking-[-1.5%]"/>
        </div>
        <div className="text-blued flex gap-[10px] ">
          <p className='opacity-60'>1</p>
          <p className=' font-bold'>$</p>
        </div>
       </div>
       </div>
           {content && <p>{content}</p>}
        </div>
      )} 

      {selectedHeader === 'clickHere' && (
        <div className='w-full mx-[20px] font-bold my-[20px] text-darkBlue text-[20px] leading-[27.24px] tracking-[-1.5%] '>
         <div className="flex w-full justify-between ">
         <div className='flex justify-start'>
          <h2 className='text-blued'>TITLE</h2>
         </div>
         <div className='flex justify-end'>
        <div className='flex'>
        <p className="flex">KMB</p>
        <FiArrowRight className='mt-[8px]'/>
        </div>
        <div className='flex'>
        <FiArrowLeft/>
        <span className='flex'> 万亿兆</span>
        </div>
        </div>
         </div>
         <div className="flex absolute top-[74%] gap-[20px] bg-[#fffbeb] opacity-40">
         <input type="text" disabled placeholder='name' className='bg-[#fffbeb] border-b text-lightDark lg:w-[330px] outline-none' />
         <div className="flex gap-[5px]">
         <input type="text" className=' lg:w-[100px] outline-none bg-[#fffbeb] font-normal text-[17px] leading-[23.15px] tracking-[-1.5%] border-b text-lightDark'/>
         <input type="text" className=' lg:w-[100px] outline-none bg-[#fffbeb] font-normal text-[17px] leading-[23.15px] tracking-[-1.5%] border-b text-lightDark'/>
         </div>
          </div>
          {content && <p>{content}</p>}
        </div>
      )}
    </div>
     </main> 
    </>
  )
}

export default Navbar
