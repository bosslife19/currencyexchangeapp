import {FiSearch} from  "react-icons/fi"
const SearchBar = () => {
  return (
    <>
     <div>
      <div className="ml-[15px] w-[612px] h-[43px] p-padd-8 gap-[6px]">
        <input className="relative w-[532px] h-[27px] rounded-full border border-lightBlue p-padd-3 gap-[8px]"/>
        <FiSearch className="absolute mt-[-21px] ml-[10px] lg:text-[15px] w-[15.42px] h-[15.42px] text-lightDark "/>
      </div>
     </div> 
    </>
  )
}

export default SearchBar
