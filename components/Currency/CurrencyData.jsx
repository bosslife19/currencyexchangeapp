import Image from "next/image"
import { useTranslations } from 'next-intl'
 const CurrencyData = () => {
  const t = useTranslations('Top');
  return (
    <>
      <main className="text-center ml-[60px]">
       <div className="flex w-[482px] h-[20px] justify-between">
        
       <div className="w-[150px] h-[22px] flex gap-[10px]">
        <h4 className=" font-normal text-[18px] leading-[21.78px] tracking-[-1.5%] font_inter text-grayed">{t('nation')}</h4>
        <Image
        width={13.6}
        height={10}
        alt="arrows"
        src="/assests/ledge.svg"
        />
       </div>
        <div className="flex items-center w-[198px] h-[20px] p-2 gap-[12px] justify-between">
         <h3 className="text-[18px] leading-[21.78px] tracking-[-1.5%] font_inter text-grayed">{t("rate")}</h3>
         <div className="mr-[10px]">
         <Image
         width={11.6}
         height={10}
         alt="arrows"
         src="/assests/Vector.svg"
         />
         </div>
        </div>
        
        <div className="flex items-center gap-[6px]">
        
          <h4 className="text-[18px] leading-[21.78px] tracking-[-1.5%] font_inter text-grayed">{t("change")}</h4>
         <Image
         width={13.6}
         height={10}
         alt="arrows"
         src="/assests/ledge.svg"
         />
        </div>
       </div>
       
      </main> 
    </>
  )
}

export default CurrencyData
