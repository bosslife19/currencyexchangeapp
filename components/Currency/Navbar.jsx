import Link from 'next/link'
import React from 'react'
// import { redirect } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Select from '../Select/Select';
const Navbar = () => {
  const t = useTranslations('Top');
  

  return (
    <>
    <div className="mx-[30px] mt-[44px]">
      <div className="flex justify-end gap-[10px]">
      <div className=" p-padd-38 gap-[8px] w-[80px] h-[28px]">
        <Link href="/" className='flex text-center text-grayed underline text-[16px] leading-[21.79px] items-center font-normal fonts_famly tracking-[-1.5%]'>{t('login')}</Link>
      </div>
        {/* select component */}
        <Select/>
      </div>
      <div className="flex ml-[26px] gap-[50px] mt-[20px]">
        <div className="text-center">
          <button className='flex justify-center w-[122px] h-[30px] rounded-[100px] p-[4px] text-center tracking-[-1.5%] bg-grayed text-[#fff] text-[20px] items-center font-normal font-sans leading-[27.24px]'>
           {t('currency')}
          </button>
        </div>
        <div className="crypto">
          <button className='tracking-[-1.5%] text-grayed items-center font-normal font-sans leading-[27.24px] text-[20px]'>{t('crypto')}</button>
        </div>
        <div className="favorites">
          <button className='tracking-[-1.5%] text-grayed items-center font-normal font-sans leading-[27.24px] text-[20px]'>{t('favorites')}</button>
        </div>
      </div> 
     </div>
    </>
  )
}

export default Navbar
