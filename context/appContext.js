'use client'
import { createContext, useState } from "react";
import * as math from 'mathjs'
import { Abril_Fatface } from "next/font/google";
export const AppContext = createContext()

const AppProvider = ({children})=>{
    const [value, setValue] = useState("");
    const updateValue = (val)=>{
        setValue(prev=>[...prev, val])
    }
    function removeLastItem(arr) {
        // Check if the array is not empty
        if (arr.length > 0) {
          // Remove the last item
          const removedItem = arr.pop();
          // Return the original array
          return arr;
        } else {
          // If the array is empty, return it as is
          return arr;
        }
      }
    const deleteValue= ()=>{
        setValue(prev=>removeLastItem([...prev]));
    }
    const updateSpecialValue = (val)=>{
        setValue(prev=>[...prev,' ',val + ' '])
    }
    const [result, setResult] = useState('')
   
    

   
    
    return (
      <AppContext.Provider value={{value, updateValue, result, setResult, updateSpecialValue, setValue, deleteValue}}>
            {children}
      </AppContext.Provider>  
    )
}

export default AppProvider