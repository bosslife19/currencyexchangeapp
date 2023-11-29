import Image from 'next/image'
import React from 'react'
  import Data from '@/app/CData'


  async function getData(){
    const results = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=13a80022778264bd9ede6a4097a4b8a5");
    const data = await results.json();
  return data;
  }
const Currencies = async () => {
  const apiData = await getData();

const {rates} = apiData
  return (
    <>
       <div className="fonts_famly ml-[50px]">
      {/* <h2>Rates</h2>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>  */}

       { Object.entries(rates).map(([currency, rate])=>(
      <div key={currency} className="flex items-center justify-between w-[532px] h-[66px]">
      <div className="flex  gap-[12px] mt-[30px] w-[180px] h-[66px] text p-2">
      <div className='mt-[3px]'>
      <Image
      width={50.6}
      height={10}
      alt="flag"
      src=""
      />  
     </div>
      <div className='text-grayed '>
        <h6 className=' font-normal text-[18px] leading-[22px] tracking-[-1.5%] w-[112px] h-[19px] mb-2'>base(&#8364;)</h6>
        <p className='w-[52px] h-[24px] text-grayed leading-[24px] text-[24px] tracking-[-1.5%] uppercase font-bold font_inter'>{currency}</p>
      </div>
     </div>

      <div className="w-[190px] h-[66px] ml-[-16px] p-2 gap-[8px] flex flex-col ">
      <div className=" items-center gap-[8px] mt-[13px] flex justify-between">
      <span className='flex items-center text-center gap-[12px] font-normal text-[16px] font_inter text-grayed leading-[19.36px] tracking-[1%]'>&#8364;1 = {rate} </span>
      <Image
      width={11.6}
       height={10}
       alt="arrows"
       src='/assests/Vector.svg' />  
      </div>
        <p className='text-blued flex gap-[3px] items-center font_inter font-normal leading-[19.36px] tracking-[-1%] text-[16px] mr-[5px]'>{rate}</p>      
      </div>

      <div className="flex mt-[20px] w-[96px] h-[66px] relative left-[15px] flex items-center">
      <span className='flex text-white bg-redpink
       p-padd-4  items-center
        w-[70px] h-[25px] rounded-[10px] gap-[4px] '>
        <Image
         width={10.6}
         height={10}
         alt="arrows"
         src='/assests/fown.svg'
         />
       <p className='leading-[15.73px] text-[13px] w-[48px] h-[16px]
       tracking-[-15%] items-center font-normal'>{rate}</p>
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
