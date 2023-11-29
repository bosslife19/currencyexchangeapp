'use client'
import { createContext, useState } from "react";
import * as math from 'mathjs'
export const AppContext = createContext()

const AppProvider = ({children})=>{
    const [value, setValue] = useState("");
    const updateValue = (val)=>{
        setValue(prev=>[...prev, val])
    }
    const updateSpecialValue = (val)=>{
        setValue(prev=>[...prev,' ',val + ' '])
    }
    const [result, setResult] = useState('')
   
    

   
    
    return (
      <AppContext.Provider value={{value, updateValue, result, setResult, updateSpecialValue, setValue}}>
            {children}
      </AppContext.Provider>  
    )
}

export default AppProvider