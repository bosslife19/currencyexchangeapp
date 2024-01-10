"use client"
import Image from 'next/image';
import { useContext, useState } from 'react';
import Link from 'next/link';
import * as math from 'mathjs'

import Svg from '../SVGS/svg';
import "../../Css/styles.css"
import { AppContext } from '@/context/appContext';


const Calculator = ({bottomText,k,m,b,deleted,illion,thousand,tab,ac}) => {
      const {updateValue, updateSpecialValue, setResult, value, setValue, deleteValue} = useContext(AppContext)
      function convertAbbreviations(inputString) {
  // Create a regular expression to match 'k', 'm', and 'b' with optional numbers before them
  const regex = /(\d*\.?\d+)?([kmb])/gi;

  // Use the replace method to replace occurrences with their corresponding values
  const modifiedString = inputString.replace(regex, (match, number, abbreviation) => {
    const numericValue = parseFloat(number) || 1; // Default to 1 if no numeric value provided
    const multiplier = {
      'k': 1e3,
      'm': 1e6,
      'b': 1e9,
    }[abbreviation.toLowerCase()];

    if (multiplier) {
      return (numericValue * multiplier).toString();
    }
   const newMatch = match.replace(/x/gi, '*');
    return newMatch; // Return the original match if not a valid replacement
  });

  const newModified = modifiedString.replace(/x/gi, '*');

  return newModified;
}

  

  return (
    <div className="bg-transparent p-4 ">
      <div className="flex justify-between my-[10px] w-[507px] ml-[150px]">
       <div className="flex font-sans justify-between gap-[30px] items-center">
        <div>
         <h5 className='text-lightDark text-[16px] font-normal leading-6 tracking-[-0.24px] '>{bottomText}</h5>
       </div>
        <Link className="flex text-center lg:ml-[60px] gap-[5px]" href='/en'>
          <div className='border-rgbas  text-[16px] font-bold cursor-pointer border-[2px] w-[27.814px] h-[27.53px] leading-6 tracking-[-0.24px] rounded-full font-sans text-blued '>
                {k}
          </div>
          <div className='border-rgbas border-[2px] cursor-pointer w-[27.814px] h-[27.53px] leading-6 tracking-[-0.24px] rounded-full font-sans text-blued '>
                {m}
          </div>
          <div className='border-rgbas border-[2px] cursor-pointer w-[27.814px] h-[27.53px] leading-6 tracking-[-0.24px] rounded-full font-sans text-blued '>
                {b}
          </div>
        </Link>
        <Link className="flex text-center gap-[3px]" href='/zh'>
          <div className='border-hastTag border-[2px] cursor-pointer text-[14px] leading w-[24px] h-[24px] rounded-full tracking-[-0.24px] font-bold font-sans text-hastTag'>
                w
          </div>
          <div className='border-hastTag border-[2px] text-[14px] cursor-pointer leading w-[24px] h-[24px] rounded-full tracking-[-0.24px] font-bold font-sans text-hastTag'>
                y
          </div>
          <div className='border-hastTag border-[2px] text-[14px] leading cursor-pointer w-[24px] h-[24px] rounded-full tracking-[-0.24px] font-bold font-sans text-hastTag'>
                z
          </div>
        </Link>
      </div>
    </div>
      <div className="ml-[55px] px-[10px] gap-2 w-[547px] h-[20rem] font-sans">
       <div className='flex items-center justify-between'>
        <div className="flex text-center">
          <span onClick={()=>{
            setValue('');
            updateValue('');
            setResult('');
          }} className="w-[90px] cursor-pointer text-center text-[24px] h-[45px] bg-transparent  text-reds border-[3px] font-normal  rounded-full">
          {ac}
          </span>        
        </div>    
        <div className="flex items-center gap-2">
        <div className="flex text-center ">
          <span onClick={()=>updateValue('(')} className="w-[41px] h-[45px] items-center bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">( </span>        
        </div> 
        <div className="flex text-center">
         <span onClick={()=>updateValue(')')} className="w-[41px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">)</span>        
        </div>  
       </div>  
       <div className="flex my-[10px] text-center">
         <span onClick={()=>updateValue('%')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full cursor-pointer">
         %
         </span>        
        </div>    
        <div className="flex text-center">
         <span onClick={()=>deleteValue()} className="w-[90px] py-2 h-[45px] items-center flex flex-col bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full">
         <Svg />
         <p className='text-[10px] cursor-pointer'>{deleted}</p>
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateSpecialValue('÷')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full cursor-pointer">
         ÷
         </span>        
        </div>      
       </div> 
       
       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center">
          <span
          onClick={()=>updateValue('7')}
          className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
          7
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
          <span 
          onClick={()=>updateValue('8')}
          className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
          8
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateValue('9')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
          9
         </span>        
        </div>    
        <div className="flex my-[10px] ">
         <span onClick={()=>updateValue('B')} className="tracking-[-0.24px] pt-[7px] cursor-pointer leading-[19.07px] gap-[6px] w-[90px] flex h-[45px]  items-center bg-transparent border-[3px] text-grayed font-normal text-[14px] rounded-full">
         <b className='text-[24px] text-blued ml-[16px] mb-[8px]'>{b}</b>{illion}
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateSpecialValue('X')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full cursor-pointer">x</span>        
        </div>     
       </div> 

       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center">
          <span onClick={()=>updateValue('4')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
           4
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
          <span onClick={()=>updateValue('5')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
           5
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateValue('6')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
           6
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateValue('M')} className=" cursor-pointer tracking-[-0.24px] pt-[7px] text-grayed gap-[4px] w-[90px] h-[45px] text-center text-[14px] items-center bg-transparent border-[3px] blued flex font-normal rounded-full">
         <b className='text-[24px] text-blued  ml-[16px] mb-[10px]'>{m}</b>{illion}
         </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateSpecialValue('-')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full cursor-pointer">
         －
         </span>        
        </div>              
        </div>   

       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center">
          <span onClick={()=>updateValue('1')} className=" cursor-pointer w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full">
           1
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
          <span onClick={()=>updateValue('2')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
          2
          </span>        
        </div>    
        <div className="flex my-[10px] text-center">
         <span onClick={()=>updateValue('3')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
         3
         </span>        
        </div>    
        <div className="flex my-[10px] text-center  items-center">
         <span onClick={()=>updateValue('K')} className="cursor-pointer tracking-[-0.24px] gap-[6px] pt-[9px] w-[90px] h-[45px] bg-transparent text-center items-center border-[3px] text-grayed flex font-normal text-[10px] rounded-full">
          <b className='text-[24px] ml-[16px] mb-[15px] text-blued '>{k}</b>{thousand}
         </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
         <span onClick={()=>updateSpecialValue('+')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-blued font-normal text-[24px] rounded-full cursor-pointer">
           +
         </span>        
         </div>  
       </div>   

       <div className='flex items-center justify-between'>
        <div className="flex my-[10px] text-center ">
          <span onClick={()=>updateValue('.')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
          .
          </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
          <span onClick={()=>updateValue('0')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
            0
          </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
         <span onClick={()=>updateValue('00')} className="w-[90px] h-[45px] bg-transparent border-[3px] text-lightDark  font-normal text-[24px] rounded-full cursor-pointer">
         00
         </span>        
        </div>    
        <div className="flex my-[10px] text-center ">
         <span className="w-[90px] text-blued h-[45px] bg-transparent border-[3px] font-normal text-[14px] py-2 rounded-full">
          <div className='flex items-center text-center justify-center'>
          <div className='w-[26px] h-[14px] p-[4px] bg-blued rounded-full'></div>
          <img src="/assests/Vector 33.svg" alt="" />
          <div className='w-[26px] h-[14px] p-[4px] bg-white bordered rounded-full cursor-pointer'></div>
          </div>
           {tab}
         </span>        
        </div>    
        <div className="flex my-[11px] text-center items-center justify-center">
         
         <span onClick={()=>{
          
           const newV =value.join("");
           console.log(newV);
           console.log(typeof(newV));
           
           const sanitizedValue = convertAbbreviations(newV);
          console.log(sanitizedValue);
         const newValue = math.evaluate(sanitizedValue);
         
         setResult(newValue);
         
         
         }} className="w-[90px] h-[45px] bg-transparent  border-[3px] text-reds font-normal leading-[22px] text-[48px] rounded-full cursor-pointer">
            =
         </span>        
        </div>    
       </div>   
      </div>
    </div>
  );
};

export default Calculator;
 