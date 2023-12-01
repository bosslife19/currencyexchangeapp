
import React from 'react'
import { useTranslations } from 'next-intl'
import Navbar from './navbar'
import Calculator from '../Calculator/Numeric'



const Head =   () => {
  const t = useTranslations('Top');
  const b = useTranslations('Bottom');

  const calculateToEuro = async ()=>{
    "use server";
    const res = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=13a80022778264bd9ede6a4097a4b8a5`)
    const data = await res.json();
    return data;
   
   
 }

  return (
    <>
    <div>
      <Navbar calculateToEuro={calculateToEuro} 
      calculation={t('calculation')} 
      exchange={t("exchange")} 
      k={b('k')}
      m={b('m')}
      b={b('b')}
      clickhere={t('clickhere')}/>
      <Calculator
        bottomText={b('bottomText')}
        k={b('k')}
        m={b('m')}
        b={b("b")}
        deleted={b("delete")}
        illion={b("illion")}
        thousand={b('thousand')}
        tab={b('tab')}
        ac={b('ac')}
      />
    </div>
    </>
  ) 
}

export default Head
