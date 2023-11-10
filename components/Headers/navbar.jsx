"use client"
import React, { useState } from 'react'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import "../../Css/styles.css"
import { FiArrowLeft, FiArrowRight, FiArrowUpLeft } from 'react-icons/fi'
const Navbar = () => {

  const [selectedHeader, setSelectedHeader] = useState('Calculation');
  const [content, setContent] = useState('');

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    // Reset content when changing sections
    setContent(''); 
  };

  const handleCalculate = () => {
    // Implement your calculator logic here
    // For example, setting a simple addition result:
    setContent('Result: 5');
  };
 
  const handleExchangeClick = () => {
    // Set exchange data
    setContent('Exchange Text, Currency: USD, Number: 100');
  };
  return (
    <>
     <main className='mx-[50px] mt-[50px] fonts_famly '>
     <div className="flex">
     <div className="flex items-center gap-[7rem]">
     <div className="flex gap-[62px] items-center mt-[-20px] ">
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
    <div className=' w-[50px] h-[40px] bg-yellowed relative border rounded-[4px] border-yellowed left-[50px]'>
    <p className='text-end text-white'>N</p>
    </div>
    <div className="flex w-[70px] text-yellowed h-[50px] text-[28px] items-center absolute border rounded-[4px] border-yellowed bg-boardyelllow left-[31.9%] top-[10.6%] z-[1000px]">
     <p className='text-[28px] items-center text-yellowed ml-[7px]'>- 1 -</p>
    </div>
    </div>
    </div>
    </div>
   
    </div>
    <br/>
     <div className="flex gap-[62px] items-center mt-[-30px] mb-[5px]">
       <span className='bg-[#0369A1] text-[#fff] w-[122px] h-[30px] rounded-[100px] p-[4px] items-center text-center'>000</span>
       <span className='text-[#667080] fonts_famly text-[20px] font-normal leading-[27.24px] items-center tracking-[-1.5%]'>KMB</span>
       <span className='text-[#667080] fonts_famly text-[20px] font-normal leading-[27.24px] items-center text-center flex tracking-[-1.5%]'>万亿兆</span>
       
     </div>
     <div className="bg-[#fffbeb]  rounded-b-2xl shadow-boxxing flex w-[582px] h-[416px]  justify-start gap-[8px] flex-1">
      {selectedHeader === 'Calculation' && (
        <div>
          <h2>Calculation</h2>
          {content && <p>{content}</p>}
        </div>
      )}
      {selectedHeader === 'Exchange' && (
        <div className='mt-[16rem] w-full'>
          <div className='bg-[#fce8c9]'>
          <div className="flex bg-[#fffbeb] justify-between fonts_famly items-center w-[582px] h-[57px] rounded-roundin p-padd-20">
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
         <div className="flex bg-[#fce8c9] justify-between fonts_famly items-center w-[582px]  h-[57px] p-padd-20 rounded-roundin">
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
         <div className="flex bg-[#fddaa1] justify-between fonts_famly items-center w-[582px] h-[57px] rounded-roundin p-padd-20">
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
