"use client"
import Image from 'next/image';
import { useState } from 'react';
import Svg from '../SVGS/svg';
import "../../Css/styles.css"

const Calculator = () => {


   const smaller_btn =[
   ]

  return (
    <div className="bg-transparent p-4 ">
      <div className="flex justify-between my-[10px] w-[507px] ml-[150px]">
       <div className="flex font-sans justify-between gap-[30px] items-center">
        <div>
         <h5 className='text-lightDark  text-[16px] font-normal leading-6 tracking-[-0.24px] '>Numeric unit key mode</h5>
       </div>
        <div className="flex text-center lg:ml-[60px] gap-[5px]">
          <div className='border-rgbas text-[16px] font-bold cursor-pointer border-[2px] w-[27.814px] h-[27.53px] leading-6 tracking-[-0.24px] rounded-full font-sans text-blued '>
                K
          </div>
          <div className='border-rgbas border-[2px] cursor-pointer w-[27.814px] h-[27.53px] leading-6 tracking-[-0.24px] rounded-full font-sans text-blued '>
                M
          </div>
          <div className='border-rgbas border-[2px] cursor-pointer w-[27.814px] h-[27.53px] leading-6 tracking-[-0.24px] rounded-full font-sans text-blued '>
                B
          </div>
        </div>
        <div className="flex text-center gap-[3px]">
          <div className='border-hastTag border-[2px] cursor-pointer text-[14px] leading w-[24px] h-[24px] rounded-full tracking-[-0.24px] font-bold font-sans text-hastTag'>
                w
          </div>
          <div className='border-hastTag border-[2px] text-[14px] cursor-pointer leading w-[24px] h-[24px] rounded-full tracking-[-0.24px] font-bold font-sans text-hastTag'>
                y
          </div>
          <div className='border-hastTag border-[2px] text-[14px] leading cursor-pointer w-[24px] h-[24px] rounded-full tracking-[-0.24px] font-bold font-sans text-hastTag'>
                z
          </div>
        </div>
      </div>
    </div>
      <div className="ml-[55px] px-[10px] gap-2 w-[547px] h-[20rem] font-sans">
       <div className='flex items-center justify-between'>
        <div className="flex text-center">
          <span className="w-[90px] text-center text-[24px] h-[45px] bg-transparent  text-reds border-[3px] font-normal  rounded-full">
          AC
          </span>        
        </div>    
        <div className="flex items-center gap-2">
        <div className="flex text-center ">
          <span className="w-[41px] h-[45px] items-center bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">( </span>        
        </div> 
        <div className="flex text-center">
         <span className="w-[41px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">)</span>        
        </div>  
       </div>  
       <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">
         %
         </span>        
        </div>    
        <div className="flex text-center">
         <span className="w-[90px] py-2 h-[45px] items-center flex flex-col bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">
         <Svg />
         <p className='text-[10px]'> delete</p>
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">
         ÷
         </span>        
        </div>      
       </div> 
       
       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
          7
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
          8
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
          9
         </span>        
        </div>    
        <div className="flex my-[10px] ">
         <span className="tracking-[-0.24px] pt-[7px] leading-[19.07px] gap-[6px] w-[90px] flex h-[45px]  items-center bg-transparent border-[3px] text-grayed font-normal text-[14px] rounded-full">
         <b className='text-[24px] text-blued ml-[16px] mb-[8px]'>B</b>illion
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">x</span>        
        </div>     
       </div> 

       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
           4
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
           5
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
           6
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="tracking-[-0.24px] pt-[7px] text-grayed gap-[4px] w-[90px] h-[45px] text-center text-[14px] items-center bg-transparent border-[3px] blued flex font-normal rounded-full">
         <b className='text-[24px] text-blued  ml-[16px] mb-[10px]'>M</b>illion
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">
         －
         </span>        
        </div>              
        </div>   

       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
           1
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
          2
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
         3
         </span>        
        </div>    
        <div className="flex my-[10px] text-center  items-center">
         <span className="tracking-[-0.24px] gap-[6px] pt-[9px] w-[90px] h-[45px] bg-transparent text-center items-center border-[3px] text-grayed flex font-normal text-[10px] rounded-full">
          <b className='text-[24px] ml-[16px] mb-[15px] text-blued '>K</b>thousand
         </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">
           +
         </span>        
         </div>  
       </div>   

       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center ">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
          .
          </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
          <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
            0
          </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
         <span className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
         00
         </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
         <span className="w-[90px] text-blued h-[45px] bg-transparent border-[3px] font-normal text-[14px] py-2 rounded-full">
          <div className='flex items-center text-center justify-center'>
          <div className='w-[26px] h-[14px] p-[4px] bg-blued rounded-full'></div>
          <img src="/assests/Vector 33.svg" alt="" />
          <div className='w-[26px] h-[14px] p-[4px] bg-white bordered rounded-full'></div>
          </div>
           Tab
         </span>        
        </div>    
        <div className="flex my-[10px] text-center items-center justify-center">
         <span className="w-[90px] h-[45px] bg-transparent  border-[3px] text-reds font-normal leading-[22px] text-[48px] rounded-full">
            =
         </span>        
        </div>    
       </div>   
      </div>
    </div>
  );
};

export default Calculator;
 