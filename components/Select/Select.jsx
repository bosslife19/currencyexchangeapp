
import React from 'react'

const Select = () => {
    
  return (
    <div className="block text-grayed p-padd-0 text-[14px] border w-[108px] h-[28px] rounded ">
       <select name="names" id="names" className='outline-none '>
       <option value="English">
        
        
        <p ><b>EN</b> English</p>
       
        </option>
       <option value="China">
        
        <b>CHN</b> China
        
       
        </option>
       <option value="Hong Kong" ><b>HKG</b> Hong Kong</option>
      
        
       
      
       
       </select>
       
      </div>
  )
}

export default Select